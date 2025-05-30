export interface QueueDataResponse {
  queueData: QueueData
  status: string
}

export interface QueueData {
  currentUserRole: string
  customerServed: any
  isActive: boolean
  isMyLastCustomer: boolean
  minutesToNextFree: number
  queue: Queue
  queueLength: number
  queueLengthBooked: number
  queueLengthNonBooked: number
  queueOccupancy: QueueOccupancy
  serversAvailable: ServersAvailable[]
  staffAvailable: number
  staffTotal: number
}

export interface Queue {
  abbreviation: any
  advanceBookingsMinutes: number
  advanceBookingsWeeks: number
  advisorCannotChooseCustomer: boolean
  allowedToToggleCustomerDescriptionOption: boolean
  applyTicketNumber: boolean
  averageServeTimeMinutes: number
  bookingStart: number
  bookingTimings: string
  bufferSpace: number
  captureOrderNumber: boolean
  clearQueueOvernight: boolean
  colour: any
  conciergeAcceptReject: boolean
  customerDescriptionEnabled: boolean
  customerEmailRequired: boolean
  customerEmailVisible: boolean
  customerNameRequired: boolean
  customerNameRequiredKiosk: boolean
  customerNameVisible: boolean
  customerPostcodeRequired: boolean
  customerPostcodeVisible: boolean
  customerQuestionEnabled: boolean
  customerSurnameRequired: boolean
  customerSurnameVisible: boolean
  customerTimings: string
  customersToday: CustomersToday[]
  emailConciergeWhenCustomerAddedEnabled: boolean
  enableFastTrackComplete: boolean
  enableFastTrackNotifyConcierges: boolean
  enableFastTrackNotifyServers: boolean
  finishReminder: boolean
  forceAdvisorToReportOutcome: boolean
  groupSizeRequired: boolean
  groupSizeVisible: boolean
  id: number
  identifier: string
  isBookingAllowed: boolean
  isNotifyConciergesWhenBookingNoShow: boolean
  isNotifyConciergesWhenMarkedNoShow: boolean
  isNotifyConciergesWhenServerIsMadeUnavailable: boolean
  isNotifyServersWhenAreMadeAvailable: boolean
  isNotifyServersWhenUnavailable: boolean
  isRestaurant: boolean
  isRetainTicketNumber: boolean
  isTabletCollectionEnabled: boolean
  isWalkinAllowed: boolean
  isWalkinPresentStatusEnabled: boolean
  isWalkoutDuringCustomerAddEnabled: boolean
  maxGroupSize: number
  maxQueueLength: number
  minWaitTimeMinutes: any
  mobileVisible: boolean
  name: string
  numberWithDuplicatedNameKiosk: boolean
  outcomeReportingBooking: boolean
  outcomeReportingWalkin: boolean
  outcomesEnabled: boolean
  pagerRequired: boolean
  pagerVisible: boolean
  queueMessagesThresholdMinutes: number
  queueMessagesThresholdPosition: number
  rejectReasonAllowFreeText: boolean
  rejectReasons: any[]
  removeCustomerEnabled: boolean
  removeCustomerHours: any
  removeCustomerMins: any
  removeCustomerMinutes: any
  requestOutcomeAdvisors: boolean
  requestOutcomeConcierge: boolean
  requiredMpn: boolean
  secondsAcceptReject: number
  serverAcceptReject: boolean
  serverAllowedBreak: boolean
  serverCannotViewProducts: boolean
  servers: Server[]
  serversCanOnlyServeBookingsAssignedToThemselves: boolean
  servingServers: any[]
  showAllUncollected: boolean
  showAssignedCustomerPopup: boolean
  showOutcomesPopupWhenFinishing: boolean
  skipJoinMessage: boolean
  smsLanguagesEnabled: any[]
  smsRestricted: boolean
  snsTopicArn: string
  staffBookingAvailability: number
  staffTimings: string
  tagSelectionList: any[]
  tags: any[]
  ticketNumberTag: string
  unreadMessagesForQueue: number
  venue: Venue
}

export interface CustomersToday {
  bookedServer: any
  bookingEndTime: any
  bookingStartTime: any
  collectingServer: any
  currentPosition: number
  customer: Customer
  expectedTime: string
  hasAnsweredQuestions: boolean
  hasBeenSentReturnMessage: boolean
  id: number
  inStore: boolean
  isFixed: boolean
  joinedTime: string
  lastSMSStatus: any
  numberSentReturnMessage: number
  originalExpectedTime: string
  product: Product
  productDescription: string | null
  timeArrivedInStore: any
  timeSentReturnMessage: string | null
  waitTime: any
  waitTimePercentComplete: number
}

export interface Customer {
  bookingRef: string
  createdBy: CreatedBy
  createdBySystem: any
  customerProfile: any
  emailAddress: string | null
  firstName: string
  groupSize: number
  id: number
  isInMultipleQueue: boolean
  language: Language
  merchantCustomer: MerchantCustomer
  mobileNetwork: any
  mobileNumber: string
  name: string
  notes: string
  numberCountryCode: string
  orderNumber: any
  pagerNumber: any
  postCode: any
  surname: string
  ticketNumber: string
  title: any
  unreadMessages: number
}

export interface CreatedBy {
  displayName: string
  id: number
}

export interface Language {
  isoCode: string
  name: string
}

export interface MerchantCustomer {
  id: number
}

export interface Product {
  averageServeTimeMinutes: number
  colour: any
  id: number
  name: string
}

export interface Server {
  displayName: string
  id: number
}

export interface Venue {
  id: number
  isBookingEnabled: boolean
  isCustomerProfileEnabled: boolean
  isCustomerProfileIconEnabled: boolean
  isWalkinEnabled: boolean
  name: string
}

export interface QueueOccupancy {
  current: number
  kioskBehaviourWhenUnderCapacity: string
  maximum: number
}

export interface ServersAvailable {
  isAlwaysAvailable: boolean
  minutesUntilNextAvailability: number
  nextAvailableMinutes: number
  server: Server2
}

export interface Server2 {
  currentBreakReason: any
  displayName: string
  id: number
  isOnBreak: boolean
  location: any
}
