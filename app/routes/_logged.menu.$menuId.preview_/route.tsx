import { Typography, Card, Slider, Button, Space, message } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': {
        src: string
        ar?: boolean
        'ar-modes'?: string
        'camera-controls'?: boolean
        style?: React.CSSProperties
      }
    }
  }
}
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ARPreviewPage() {
  const { menuId } = useParams()
  const [scale, setScale] = useState<string>('1.0')
  const [position, setPosition] = useState<string>('0,0,0')

  const { data: menuItem, isLoading } = Api.menuItem.findFirst.useQuery({
    where: { id: menuId },
    include: { restaurant: true },
  })

  const { mutateAsync: updateMenuItem } = Api.menuItem.update.useMutation()

  const handleSaveChanges = async () => {
    try {
      await updateMenuItem({
        where: { id: menuId },
        data: {
          arScale: scale,
          arPosition: position,
        },
      })
      message.success('AR settings saved successfully')
    } catch (error) {
      message.error('Failed to save AR settings')
    }
  }

  const handlePositionChange = (axis: string, value: number) => {
    const [x, y, z] = position.split(',').map(Number)
    let newPosition
    switch (axis) {
      case 'x':
        newPosition = `${value},${y},${z}`
        break
      case 'y':
        newPosition = `${x},${value},${z}`
        break
      case 'z':
        newPosition = `${x},${y},${value}`
        break
      default:
        return
    }
    setPosition(newPosition)
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <i className="las la-spinner la-spin la-3x" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <Title level={2}>
          <i className="las la-cube" /> AR Preview
        </Title>
        <Text type="secondary">
          Preview and adjust how your menu item will appear in AR before
          publishing
        </Text>

        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          <Card style={{ flex: 2 }}>
            <div
              style={{
                aspectRatio: '16/9',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              {menuItem?.arModelUrl ? (
                <model-viewer
                  src={menuItem.arModelUrl}
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  style={{ width: '100%', height: '100%' }}
                ></model-viewer>
              ) : (
                <Text type="secondary">
                  <i className="las la-cube la-3x" />
                  <br />
                  No AR model available
                </Text>
              )}
            </div>
            <Title level={4}>{menuItem?.name}</Title>
            <Text>{menuItem?.description}</Text>
          </Card>

          <Card style={{ flex: 1 }} title="AR Controls">
            <div style={{ marginBottom: '2rem' }}>
              <Text strong>Scale</Text>
              <Slider
                min={0.1}
                max={2}
                step={0.1}
                value={parseFloat(scale)}
                onChange={value => setScale(value.toString())}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <Text strong>Position</Text>
              <div style={{ marginTop: '1rem' }}>
                <Text>X Axis</Text>
                <Slider
                  min={-5}
                  max={5}
                  step={0.1}
                  value={parseFloat(position.split(',')[0])}
                  onChange={value => handlePositionChange('x', value)}
                />
                <Text>Y Axis</Text>
                <Slider
                  min={-5}
                  max={5}
                  step={0.1}
                  value={parseFloat(position.split(',')[1])}
                  onChange={value => handlePositionChange('y', value)}
                />
                <Text>Z Axis</Text>
                <Slider
                  min={-5}
                  max={5}
                  step={0.1}
                  value={parseFloat(position.split(',')[2])}
                  onChange={value => handlePositionChange('z', value)}
                />
              </div>
            </div>

            <Space direction="vertical" style={{ width: '100%' }}>
              <Button
                type="primary"
                block
                onClick={handleSaveChanges}
                icon={<i className="las la-save" />}
              >
                Save Changes
              </Button>
              <Button block icon={<i className="las la-eye" />}>
                Test AR View
              </Button>
            </Space>
          </Card>
        </div>
      </div>
    </PageLayout>
  )
}
