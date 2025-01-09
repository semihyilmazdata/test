import {
  Typography,
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Upload,
  message,
} from 'antd'
import { useState } from 'react'
import type { MenuItem } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MenuItemsPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const { mutateAsync: upload } = useUploadPublic()

  const { data: restaurant } = Api.restaurant.findFirst.useQuery({
    where: { userId: user?.id },
  })

  const { data: menuItems, refetch } = Api.menuItem.findMany.useQuery({
    where: { restaurantId: restaurant?.id },
  })

  const createMenuItem = Api.menuItem.create.useMutation()
  const updateMenuItem = Api.menuItem.update.useMutation()
  const deleteMenuItem = Api.menuItem.delete.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      const imageFile = values.imageUrl?.file
      let imageUrl = editingItem?.imageUrl

      if (imageFile) {
        const uploadResult = await upload({ file: imageFile })
        imageUrl = uploadResult.url
      }

      const menuItemData = {
        name: values.name,
        description: values.description,
        price: values.price.toString(),
        category: values.category,
        imageUrl,
        isPublished: true,
        restaurantId: restaurant?.id,
      }

      if (editingItem) {
        await updateMenuItem.mutateAsync({
          where: { id: editingItem.id },
          data: menuItemData,
        })
      } else {
        await createMenuItem.mutateAsync({
          data: menuItemData,
        })
      }

      message.success(
        `Menu item ${editingItem ? 'updated' : 'created'} successfully`,
      )
      setIsModalOpen(false)
      form.resetFields()
      setEditingItem(null)
      refetch()
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteMenuItem.mutateAsync({ where: { id } })
      message.success('Menu item deleted successfully')
      refetch()
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (url: string) =>
        url ? (
          <img
            src={url}
            alt="Menu item"
            style={{ width: 50, height: 50, objectFit: 'cover' }}
          />
        ) : (
          '-'
        ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: MenuItem) => (
        <div>
          <Button
            type="link"
            onClick={() => {
              setEditingItem(record)
              form.setFieldsValue(record)
              setIsModalOpen(true)
            }}
          >
            <i className="las la-edit"></i>
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            <i className="las la-trash"></i>
          </Button>
        </div>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <div>
            <Title level={2}>Menu Items</Title>
            <Text>Manage your restaurant's menu items</Text>
          </div>
          <Button
            type="primary"
            onClick={() => {
              setEditingItem(null)
              form.resetFields()
              setIsModalOpen(true)
            }}
          >
            <i className="las la-plus"></i> Add Menu Item
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={menuItems}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title={editingItem ? 'Edit Menu Item' : 'Add Menu Item'}
          open={isModalOpen}
          onCancel={() => {
            setIsModalOpen(false)
            setEditingItem(null)
            form.resetFields()
          }}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input the name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: 'Please input the description!' },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please input the price!' }]}
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              name="category"
              label="Category"
              rules={[
                { required: true, message: 'Please input the category!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="imageUrl" label="Image">
              <Upload
                maxCount={1}
                beforeUpload={() => false}
                listType="picture-card"
              >
                <div>
                  <i className="las la-upload"></i>
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={createMenuItem.isLoading || updateMenuItem.isLoading}
              >
                {editingItem ? 'Update' : 'Create'}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
