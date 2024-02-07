/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // images: {
  //   domains: ['https://postimages.org/', 'https://postimg.cc/kBWDW3SY/c607f827'],
  // },
  images: {
    loader: 'akamai',
    path: '',
  },
  distDir: "build"
  // "rules": {
  //   "no-mixed-spaces-and-tabs": 0, 
  // }
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ['https://postimages.org/', 'https://postimg.cc/kBWDW3SY/c607f827'],
//   },
// }


// module.exports = {
//   "rules": {
//     "no-mixed-spaces-and-tabs": 0, 
//   }
// }
