import { http, HttpResponse } from 'msw'

import { UpdateProfile } from '../update-profile'

export const updateProfileMock = http.put<never, UpdateProfile>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'John Doe') {
      return new HttpResponse(null, { status: 204 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)