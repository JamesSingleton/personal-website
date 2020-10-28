import { NAME, WEBSITE_DESCRIPTION } from '@/lib/constants';

const Hero = () => (
  <div className="p-12 min-h-100 relative flex flex-col justify-center items-center overflow-hidden">
    <img
      className="w-64 h-64 rounded-full"
      alt={NAME}
      src="/images/profile.png"
    />
    <p className="text-xl font-extrabold tracking-tighter leading-tight mt-2">Hi, my name is</p>
    <h1 className="text-5xl font-extrabold tracking-tighter leading-tight">{NAME}</h1>
    <h2 className="text-3xl font-extrabold tracking-tighter leading-tight">{WEBSITE_DESCRIPTION}</h2>
  </div>
)
export default Hero