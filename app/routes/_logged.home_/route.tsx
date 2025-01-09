import { Typography, Card, Row, Col, Button, Spin } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()

  // Fetch featured showcases
  const { data: showcases, isLoading: isLoadingShowcases } =
    Api.showcase.findMany.useQuery({
      where: { featured: true },
      include: { restaurant: true },
    })

  // Fetch featured restaurants
  const { data: restaurants, isLoading: isLoadingRestaurants } =
    Api.restaurant.findMany.useQuery({
      where: { status: 'ACTIVE' },
      take: 6,
    })

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Title level={1}>
            <i className="las la-magic" style={{ marginRight: 8 }} />
            Transform Your Menu Experience
          </Title>
          <Paragraph style={{ fontSize: 18 }}>
            Discover the future of dining with our AR-powered menu solutions
          </Paragraph>
        </div>

        {/* AR Showcase Section */}
        <Title level={2} style={{ marginBottom: 24 }}>
          <i className="las la-camera" style={{ marginRight: 8 }} />
          AR Menu Transformations
        </Title>
        {isLoadingShowcases ? (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[24, 24]}>
            {showcases?.map(showcase => (
              <Col xs={24} sm={12} md={8} key={showcase.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={showcase.title}
                      src={
                        showcase.imageUrl || 'https://placeholder.com/300x200'
                      }
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                  }
                >
                  <Card.Meta
                    title={showcase.title}
                    description={showcase.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* Featured Restaurants Section */}
        <Title level={2} style={{ margin: '48px 0 24px' }}>
          <i className="las la-utensils" style={{ marginRight: 8 }} />
          Featured Restaurant Partners
        </Title>
        {isLoadingRestaurants ? (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[24, 24]}>
            {restaurants?.map(restaurant => (
              <Col xs={24} sm={12} md={8} key={restaurant.id}>
                <Card
                  hoverable
                  onClick={() => navigate(`/restaurant/${restaurant.id}/menu`)}
                >
                  <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    {restaurant.logoUrl ? (
                      <img
                        src={restaurant.logoUrl}
                        alt={restaurant.name}
                        style={{ width: 80, height: 80, borderRadius: '50%' }}
                      />
                    ) : (
                      <i
                        className="las la-store"
                        style={{ fontSize: 48, color: '#1890ff' }}
                      />
                    )}
                  </div>
                  <Card.Meta
                    title={restaurant.name}
                    description={restaurant.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* Quick Demo Section */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 48,
            padding: 48,
            background: '#f0f2f5',
            borderRadius: 8,
          }}
        >
          <Title level={2}>
            <i className="las la-mobile" style={{ marginRight: 8 }} />
            Try AR Menu Demo
          </Title>
          <Paragraph style={{ marginBottom: 24 }}>
            Experience our AR menu technology right now using your device camera
          </Paragraph>
          <Button
            type="primary"
            size="large"
            icon={<i className="las la-camera" />}
            onClick={() => navigate('/menu/demo/preview')}
          >
            Launch Demo
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
