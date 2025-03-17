/** @type {import('next').NextConfig} */
export const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'emqeebxhcpftsxaylsdw.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/cabin-images/**',
            search: '',
          },
        ],
      },

};

export default nextConfig;
