export interface Entry {
  _id: string,
  description: string,
  status: EntryStatus,
  createdAt: number
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';