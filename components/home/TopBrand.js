import Image from 'next/image';

const TopBrand = () => {
  return (
    <div className="container-fluid bg-light">
    <Image
      src="/assets/images/top-brand.jpg"
      width={1600}
      height={48}
      alt="medmarket-top-brand"
      className="top-brand"
    />
  </div>
  )
} 

export default TopBrand;
