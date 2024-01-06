import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import Company_page from './components/companypage/company_page'

export default function Home() {
  return (
    <main>
      <div>
        {/* <h1>Wellcome to home page through links or routing in next js CSR SSR SSG</h1>
          <Link href={'/user'}>User</Link>
          <ProductCard/> */}
        {/* <div className='w-full mb-10'>
          <h1 className='text-center text-2xl font-bold'>Welcome to the Create Technology page</h1>
        </div> */}

        <Company_page/>
      </div>
    </main>
  )
}
