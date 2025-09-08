import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
    <h1 className="text-xl font-bold mb-4">Profile</h1>
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
          Back to dashboard</Button>
      </Link>
    </div>
  )
}

export default page