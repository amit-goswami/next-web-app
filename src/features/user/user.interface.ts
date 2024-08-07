export enum USER_PROFILE_QUERY_KEYS {
  GET_PROFILE_DETAILS = 'GET_PROFILE_DETAILS'
}

export enum USER_TYPE {
  CUSTOMER = 'customer'
}

export enum USER_PROFILE_TOAST_MESSAGE {
  PROFILE_UPDATED = 'Profile updated successfully'
}

export interface IProfileDetails {
  bio: string
  birth_date: string | null
  books_read: string | null
  education_background: string | null
  email: string
  fb_handle: string | null
  gov_id: string | null
  image: string | null
  insta_handle: string | null
  music_interest: string | null
  tweet_handle: string | null
  user_type: USER_TYPE
  username: string
  weight: string | null
}

export interface ITrek {
  trek_id: string
  trek_name: string
  _id: string
}

export interface IPathRoutes {
  name: string
  transPortMode: string | null
}

export interface IOtherPrices {
  price: number
  description: string
}

export interface IRecentTrek {
  otherPrices: IOtherPrices[]
  pathRoutes: IPathRoutes[]
  contactNumber: string
  destinationLocation: string
  email: string
  endDate: string
  price: number
  sourceLocation: string
  startDate: string
  trek: ITrek
  status: string
  createdAt: string
  totalAmount: number
  paidAmount: number
  _id: string
  ticket: string
}

export interface IUserAllDetails {
  profileDetails: IProfileDetails
  recentTreks: IRecentTrek
}

export interface ICustomerDeatils {
  customer_id: string
  customer_email: string
  customer_phone: string
  customer_name: string | null
  customer_bank_account_number: string | null
  customer_bank_ifsc: string | null
  customer_bank_code: string | null
  customer_uid: string | null
}

export interface IOrderMeta {
  return_url: string
  notify_url: string | null
  payment_methods: string | null
}

export interface ICashFreeOrder {
  cf_order_id: string
  order_id: string
  entity: string
  order_currency: string
  order_amount: number
  order_status: string
  payment_session_id: string
  order_expiry_time: string
  order_note: string | null
  created_at: string
  order_splits: []
  customer_details: ICustomerDeatils
  order_meta: IOrderMeta
  order_tags: string | null
}

export interface IPaymentHistory {
  trekRequest: string
  cashFreeOrder: ICashFreeOrder
  cashFreeOrderId: string
  status: string
}

export interface IBookingHistoryDetails {
  _id: string
  trek: ITrek
  sourceLocation: string
  destinationLocation: string
  contactNumber: string
  startDate: string
  endDate: string
  email: string
  status: string
  pathRoutes: IPathRoutes[]
  price: number
  createdAt: string
  otherPrices: IOtherPrices[]
  trekName: string
}
