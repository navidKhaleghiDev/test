import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  eslint:{
    // this configures that where to use the eslint in the project and we can disable in the build time. 
    // dirs:["app"],
    // ignoreDuringBuilds : true
  },
};



export default nextConfig;
