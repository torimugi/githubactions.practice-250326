module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // TailwindCSSを適用するファイルを指定
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1a1a1a', // カスタムカラーを定義
      },
    },
  },
  plugins: [],
} 