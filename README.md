# bun-shell-min-timer ⏳ 🎧 🧘
Simple version of the pomodoro timer. Project created to test bun-shell update.

After setting the builded file to my .zshrc I can now just run:
```sh
// timer [work|rest] &
timer work & 
timer rest & 
```
Or I can set a custom time for each one of the actions:
```sh
timer work 10 & 
timer rest 10 & 
```

#### How to contribute
To install dependencies:

```bash
bun install
```

To run:

```bash
bun index.ts work
bun index.ts rest
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
