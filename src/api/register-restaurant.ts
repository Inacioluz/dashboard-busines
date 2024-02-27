import { api } from '../lib/axios'
export interface RegisterRestaurantBody {
  email: string
  restaurantName: string
  phone: string
  managerName: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
