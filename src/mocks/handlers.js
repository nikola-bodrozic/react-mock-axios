import { rest } from 'msw'
import { url } from '../App'

export const handlers = [
    rest.get(url, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                  "id": 1,
                  "name": "Mock Leanne Graham"
                },
                {
                  "id": 2,
                  "name": "Mock Ervin Howell"
                }
              ])
        )
    })
]