import { Typography, Card, Row, Col, Button, Empty, Spin } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CustomerViewPage() {
  const { restaurantId } = useParams()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Fetch restaurant details
  const { data: restaurant, isLoading: isLoadingRestaurant } =
    Api.restaurant.findFirst.useQuery({
      where: { id: restaurantId },
      include: { menuItems: true },
    })

  // Group menu items by category
  const categories = restaurant?.menuItems
    ?.reduce((acc: string[], item) => {
      if (item.category && !acc.includes(item.category)) {
        acc.push(item.category)
      }
      return acc
    }, [])
    .sort()

  // Filter menu items by selected category
  const filteredMenuItems = selectedCategory
    ? restaurant?.menuItems?.filter(item => item.category === selectedCategory)
    : restaurant?.menuItems

  if (isLoadingRestaurant) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  if (!restaurant) {
    return (
      <PageLayout layout="full-width">
        <Empty description="Restaurant not found" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        {/* Restaurant Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          {restaurant.logoUrl && (
            <img
              src={restaurant.logoUrl}
              alt={restaurant.name || 'Restaurant logo'}
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                marginBottom: 16,
              }}
            />
          )}
          <Title level={2}>{restaurant.name}</Title>
          <Text>{restaurant.description}</Text>
        </div>

        {/* Category Filter */}
        <div style={{ marginBottom: 24, textAlign: 'center' }}>
          <Button
            type={selectedCategory === null ? 'primary' : 'default'}
            onClick={() => setSelectedCategory(null)}
            style={{ margin: '0 8px 8px' }}
          >
            All
          </Button>
          {categories?.map(category => (
            <Button
              key={category}
              type={selectedCategory === category ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(category)}
              style={{ margin: '0 8px 8px' }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <Row gutter={[24, 24]}>
          {filteredMenuItems?.map(item => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <Card
                hoverable
                cover={
                  item.imageUrl && (
                    <img
                      alt={item.name}
                      src={item.imageUrl}
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                  )
                }
                actions={[
                  item.arModelUrl && (
                    <Button type="link" href={`/menu/${item.id}/preview`}>
                      <i className="las la-cube" /> View in AR
                    </Button>
                  ),
                ].filter(Boolean)}
              >
                <Card.Meta
                  title={item.name}
                  description={
                    <div>
                      <Text>{item.description}</Text>
                      <div style={{ marginTop: 8 }}>
                        <Text strong>${item.price}</Text>
                      </div>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {(!filteredMenuItems || filteredMenuItems.length === 0) && (
          <Empty description="No menu items found" />
        )}
      </div>
    </PageLayout>
  )
}
