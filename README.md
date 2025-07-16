# 🎨 Personal Portfolio - Leopold Maitre
# 🎨 ポートフォリオ - Leopold Maitre

A modern and responsive portfolio developed with Next.js, showcasing my full-stack development skills and projects.
Next.jsで開発されたモダンでレスポンシブなポートフォリオ。フルスタック開発スキルとプロジェクトを紹介します。

## 🌟 Features / 機能

### ✨ Design & UX / デザインとUX
- **Modern design** with clean and professional interface / **モダンデザイン**でクリーンでプロフェッショナルなインターフェース
- **Dark/light mode** with smooth transitions / **ダーク/ライトモード**でスムーズな切り替え
- **Responsive design** optimized for all devices / **レスポンシブデザイン**で全デバイスに最適化
- **Smooth animations** with Framer Motion / **スムーズなアニメーション**でFramer Motion使用
- **Modern icons** with Lucide React / **モダンなアイコン**でLucide React使用

### 🎯 Main Sections / メインセクション
- **Hero** : Personal introduction with social links / **ヒーロー** : ソーシャルリンク付きの自己紹介
- **Presentation** : Programming language skills / **プレゼンテーション** : プログラミング言語スキル
- **Projects** : Project portfolio with descriptions and links / **プロジェクト** : 説明とリンク付きのプロジェクトポートフォリオ
- **About** : Detailed presentation and experience / **自己紹介** : 詳細なプレゼンテーションと経験

### 🌍 Multilingual / 多言語対応
- Interface in **Japanese** with multilingual support / **日本語**インターフェースで多言語サポート
- Presentation in **English and Japanese** / **英語と日本語**でのプレゼンテーション

## 🛠️ Technologies Used / 使用技術

### Frontend / フロントエンド
- **Next.js 15** - React framework with SSR / ReactフレームワークでSSR対応
- **React 18** - UI library / UIライブラリ
- **TypeScript** - Static typing / 静的型付け
- **Tailwind CSS** - Utility CSS framework / ユーティリティCSSフレームワーク
- **Framer Motion** - Smooth animations / スムーズなアニメーション

### Icons & UI / アイコンとUI
- **Lucide React** - Modern and lightweight icons / モダンで軽量なアイコン
- **Next Themes** - Light/dark theme management / ライト/ダークテーマ管理
- **React Scroll** - Smooth navigation / スムーズなナビゲーション

### Deployment & Analytics / デプロイメントとアナリティクス
- **Vercel Analytics** - Performance tracking / パフォーマンス追跡
- **Vercel** - Automatic deployment / 自動デプロイメント

## 🚀 Installation and Setup / インストールとセットアップ

### Prerequisites / 前提条件
- Node.js 18+ 
- npm or yarn / npmまたはyarn

### Installation / インストール
```bash
# Clone the repository / リポジトリをクローン
git clone [REPO_URL]
cd Portofolio

# Install dependencies / 依存関係をインストール
npm install

# Start development server / 開発サーバーを起動
npm run dev
```

### Available Scripts / 利用可能なスクリプト
```bash
npm run dev      # Start development server / 開発サーバーを起動
npm run build    # Build for production / 本番用ビルド
npm run start    # Start production server / 本番サーバーを起動
npm run lint     # Code verification / コード検証
```

## 📁 Project Structure / プロジェクト構造

```
Portofolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/          # About section / 自己紹介セクション
│   │   │   ├── header/         # Navigation and theme / ナビゲーションとテーマ
│   │   │   ├── hero/           # Welcome section / ウェルカムセクション
│   │   │   ├── presentation/   # Skills and languages / スキルと言語
│   │   │   └── projects/       # Project portfolio / プロジェクトポートフォリオ
│   │   ├── data/               # Static data / 静的データ
│   │   ├── globals.css         # Global styles and themes / グローバルスタイルとテーマ
│   │   ├── layout.tsx          # Main layout / メインレイアウト
│   │   └── page.tsx            # Home page / ホームページ
│   └── ...
├── public/                     # Static assets / 静的アセット
├── tailwind.config.js          # Tailwind configuration / Tailwind設定
└── package.json
```

## 🎨 Themes and Colors / テーマとカラー

### Light Mode / ライトモード
- **Background** : `#f7fcfd`
- **Main text** : `#0a1b32` / **メインテキスト** : `#0a1b32`
- **Accent** : `#186feb`
- **Light accent** : `#74a9f3` / **ライトアクセント** : `#74a9f3`

### Dark Mode / ダークモード
- **Background** : `#29292d`
- **Main text** : `#f8f7f8` / **メインテキスト** : `#f8f7f8`
- **Accent** : `#e25651`
- **Light accent** : `#EB8985` / **ライトアクセント** : `#EB8985`

## 💻 Skills Showcased / 紹介スキル

### Programming Languages / プログラミング言語
- **SQL** - Database and queries / データベースとクエリ
- **C#** - Backend development / バックエンド開発
- **JavaScript** - Frontend development / フロントエンド開発
- **React** - Frontend framework / フロントエンドフレームワーク

### Tools and Technologies / ツールと技術
- **Next.js** - Full-stack framework / フルスタックフレームワーク
- **Tailwind CSS** - Styling / スタイリング
- **TypeScript** - Typing / 型付け
- **Framer Motion** - Animations / アニメーション

## 🌐 Deployment / デプロイメント

The project is configured for automatic deployment on Vercel:
プロジェクトはVercelでの自動デプロイメント用に設定されています：

1. Connect your GitHub repository to Vercel / GitHubリポジトリをVercelに接続
2. Changes are automatically deployed / 変更は自動的にデプロイされます
3. Integrated analytics for performance tracking / パフォーマンス追跡用の統合アナリティクス

## 📱 Responsive Design / レスポンシブデザイン

The portfolio adapts perfectly to all screens:
ポートフォリオはすべての画面に完璧に適応します：
- **Mobile** : Hamburger navigation, optimized layout / **モバイル** : ハンバーガーナビゲーション、最適化されたレイアウト
- **Tablet** : Grid and spacing adaptation / **タブレット** : グリッドとスペーシングの適応
- **Desktop** : Full display with animations / **デスクトップ** : アニメーション付きの完全表示

## 🔧 Customization / カスタマイズ

### Modify Colors / 色を変更
Edit CSS variables in `src/app/globals.css`:
`src/app/globals.css`のCSS変数を編集：
```css
:root {
  --color-impact: #e25651;
  --color-impact-light: #186feb;
  /* ... other colors / その他の色 */
}
```

### Add Projects / プロジェクトを追加
Modify `src/app/data/projectData.js`:
`src/app/data/projectData.js`を修正：
```javascript
const projectData = [
  {
    id: 1,
    technology: 'Next.js/Tailwind',
    description: 'Project description / プロジェクトの説明',
    // ...
  }
];
```

### Change Languages / 言語を変更
Modify `src/app/data/imageData.js`:
`src/app/data/imageData.js`を修正：
```javascript
const imageLanguage = [
  {
    id: 1,
    name: 'New Language / 新しい言語',
    icon: 'IconName',
    color: 'text-li dark:text-impact'
  }
];
```

## 📄 License / ライセンス

This project is private and intended for personal use.
このプロジェクトはプライベートで個人使用を目的としています。

## 👨‍💻 Author / 作者

**Leopold Maitre**
- Full-stack developer based in Fukuoka / 福岡在住のフルスタック開発者
- Specialized in SQL, C#, JavaScript and React / SQL、C#、JavaScript、React専門
- Trilingual: English, Japanese / 三言語対応：英語、日本語

---

⭐ Feel free to contact me for any questions or collaboration! / ご質問やコラボレーションについてお気軽にお問い合わせください！
