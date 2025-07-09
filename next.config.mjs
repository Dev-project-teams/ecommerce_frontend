// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['cdn.dummyjson.com'],
//     },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns :[
            {
                protocol:"https",
                hostname:'**'
            }
        ],
        // domains: [
        //     // 'cdn.dummyjson.com',
        //     'hrpf.selvisoftware.in',
        //     // 'images.unsplash.com',
        //     // 'your-other-domain.com'
        // ]
    }
};

export default nextConfig;
