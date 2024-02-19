# bun-shell-min-timer ⏳ 🎧 🧘

Simple version of the pomodoro timer. Project created to test bun-shell update.

![rest](https://github.com/marcosrjjunior/bun-shell-min-timer/blob/main/assets/rest-output.png?raw=true)

![work](https://github.com/marcosrjjunior/bun-shell-min-timer/blob/main/assets/work-output.png?raw=true)

After building and setting the to my .zshrc I can now just run anywhere:

```sh
// $ timer [work|rest] &
$ timer work &
$ timer rest &
```

Or you can set a custom time for each one of the actions:

```sh
$ timer work 10 &
$ timer rest 10 &
```

#### How to contribute

Install dependencies:

```sh
bun install
```

Run:

```sh
bun index.ts work
bun index.ts rest
```

#### How to build

```sh
bun run build
```
