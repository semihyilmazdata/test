import {
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Table,
  Avatar,
  Space,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function RestaurantDashboardPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()

  // Fetch restaurant data
  const { data: restaurant } = Api.restaurant.findFirst.useQuery({
    where: { userId: user?.id },
    include: {
      menuItems: {
        include: {
          customerInteractions: true,
        },
      },
    },
  })

  // Calculate statistics
  const totalArItems =
    restaurant?.menuItems?.filter(item => item.arModelUrl)?.length || 0
  const totalInteractions =
    restaurant?.menuItems?.reduce(
      (acc, item) => acc + (item.customerInteractions?.length || 0),
      0,
    ) || 0

  // Table columns for AR menu items
  const columns = [
    {
      title: 'Item',
      key: 'item',
      render: (record: any) => (
        <Space>
          <Avatar src={record.imageUrl} />
          <Text>{record.name}</Text>
        </Space>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Interactions',
      key: 'interactions',
      render: (record: any) =>
        record.customerInteractions?.length.toString() || '0',
    },
    {
      title: 'Last Updated',
      key: 'updated',
      render: (record: any) => dayjs(record.updatedAt).format('MMM D, YYYY'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Space>
          <i
            className="las la-eye"
            style={{ cursor: 'pointer', fontSize: '20px' }}
            onClick={() => navigate(`/menu/${record.id}/preview`)}
          />
          <i
            className="las la-edit"
            style={{ cursor: 'pointer', fontSize: '20px' }}
            onClick={() => navigate('/restaurant/menu-items')}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Row gutter={[24, 24]} align="middle" justify="space-between">
          <Col>
            <Title level={2}>Restaurant Dashboard</Title>
            <Text type="secondary">
              Manage your AR menu items and view customer interactions
            </Text>
          </Col>
          <Col>
            <Space>
              <i className="las la-cog" style={{ fontSize: '24px' }} />
              <Text>{restaurant?.name}</Text>
            </Space>
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title="AR Menu Items"
                value={totalArItems}
                prefix={<i className="las la-cube" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title="Total Customer Interactions"
                value={totalInteractions}
                prefix={<i className="las la-users" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title="Menu Categories"
                value={
                  new Set(restaurant?.menuItems?.map(item => item.category))
                    .size
                }
                prefix={<i className="las la-tags" />}
              />
            </Card>
          </Col>
        </Row>

        <Card style={{ marginTop: '24px' }}>
          <Title level={4}>AR Menu Items</Title>
          <Table
            columns={columns}
            dataSource={
              restaurant?.menuItems?.filter(item => item.arModelUrl) || []
            }
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />
        </Card>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          <Col xs={24} lg={12}>
            <Card>
              <Title level={4}>Restaurant Profile</Title>
              <Space direction="vertical">
                <Text strong>Name: </Text>
                <Text>{restaurant?.name}</Text>
                <Text strong>Description: </Text>
                <Text>{restaurant?.description}</Text>
                <Text strong>Address: </Text>
                <Text>{restaurant?.address}</Text>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card>
              <Title level={4}>Quick Actions</Title>
              <Space size="large">
                <Card
                  hoverable
                  style={{ width: 120, textAlign: 'center' }}
                  onClick={() => navigate('/restaurant/menu-items')}
                >
                  <i className="las la-plus" style={{ fontSize: '24px' }} />
                  <Text>Add Menu Item</Text>
                </Card>
                <Card
                  hoverable
                  style={{ width: 120, textAlign: 'center' }}
                  onClick={() => navigate(`/restaurant/${restaurant?.id}/menu`)}
                >
                  <i className="las la-eye" style={{ fontSize: '24px' }} />
                  <Text>View Menu</Text>
                </Card>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
