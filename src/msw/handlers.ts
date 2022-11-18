import { rest } from 'msw';

export default [
  rest.get(
    'https://dummyjson.com/posts',
    (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
              "posts": [
                {
                  "id": 1,
                  "title": "His mother had always taught him",
                  "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
                  "userId": 9,
                  "tags": [
                    "history",
                    "american",
                    "crime"
                  ],
                  "reactions": 2
                },
                {
                  "id": 2,
                  "title": "He was an expert but not in a discipline",
                  "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
                  "userId": 13,
                  "tags": [
                    "french",
                    "fiction",
                    "english"
                  ],
                  "reactions": 2
                },
              ]
            })
        );
    }
),
];