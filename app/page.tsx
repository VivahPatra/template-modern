'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from '@/components/layout/CustomCursor'
import LoadingScreen from '@/components/layout/LoadingScreen'
import FloatingFABs from '@/components/layout/FloatingFABs'
import TimelinePage from '@/components/TimelinePage'
import { WeddingDataProvider } from '@/context/WeddingDataContext'
import { EditModeProvider } from '@/context/EditModeContext'

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <WeddingDataProvider>
      <EditModeProvider>
        <CustomCursor />
        <AnimatePresence>
          {!loaded && <LoadingScreen key="loading" onComplete={() => setLoaded(true)} />}
        </AnimatePresence>
        {loaded && (
          <>
            <FloatingFABs />
            <TimelinePage />
          </>
        )}
      </EditModeProvider>
    </WeddingDataProvider>
  )
}
