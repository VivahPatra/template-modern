'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { weddingData as defaultData } from '@/data/wedding-data'
import type { WeddingConfig, WeddingEvent, GalleryImage, StoryMilestone, FamilyMember } from '@/types/wedding.types'

const WeddingDataContext = createContext<WeddingConfig>(defaultData)

interface EditorEvent {
  id: string
  name: string
  emoji: string
  date: string
  time: string
  venue: string
  venueAddress: string
  venueMapLink?: string
  description?: string
  image?: string
  color: string
}

interface EditorStoryItem {
  date: string
  title: string
  description: string
  icon: string
  image?: string
}

interface EditorGalleryImage {
  src: string
  alt: string
  span?: 'normal' | 'wide' | 'tall'
}

interface EditorPayload {
  groomFirst?: boolean
  groomName?: string
  brideName?: string
  groomParents?: string
  brideParents?: string
  groomSubtitle?: string
  brideSubtitle?: string
  weddingDate?: string
  hashtag?: string
  tagline?: string
  heroSubtitle?: string
  invitationHeading?: string
  invitationSubtitle?: string
  invitationBlessing?: string
  invitationText?: string
  rsvpHeading?: string
  rsvpText?: string
  heroImage?: string
  bridePhoto?: string
  groomPhoto?: string
  backgroundMusic?: string
  galleryImages?: EditorGalleryImage[]
  events?: EditorEvent[]
  coupleStory?: EditorStoryItem[]
  familyBride?: FamilyMember[]
  familyGroom?: FamilyMember[]
  venueName?: string
  venueAddress?: string
  venueMapUrl?: string
  rsvpPhone?: string
  rsvpMessage?: string
  rsvpDeadline?: string
  instagram?: string
  sections?: Record<string, unknown>
}

function mapEditorToConfig(d: EditorPayload): WeddingConfig {
  const result: WeddingConfig = {
    groomName: d.groomName || defaultData.groomName,
    brideName: d.brideName || defaultData.brideName,
    groomParents: d.groomParents || defaultData.groomParents,
    brideParents: d.brideParents || defaultData.brideParents,
    weddingDate: d.weddingDate ? new Date(d.weddingDate) : defaultData.weddingDate,
    hashtag: d.hashtag || defaultData.hashtag,
    tagline: d.tagline || defaultData.tagline,
    heroSubtitle: d.heroSubtitle || defaultData.heroSubtitle,
    invitationHeading: d.invitationHeading || defaultData.invitationHeading,
    invitationSubtitle: d.invitationSubtitle || defaultData.invitationSubtitle,
    invitationBlessing: d.invitationBlessing || defaultData.invitationBlessing,
    invitationText: d.invitationText || defaultData.invitationText,
    rsvpHeading: d.rsvpHeading || defaultData.rsvpHeading,
    rsvpText: d.rsvpText || defaultData.rsvpText,
    rsvpDeadline: d.rsvpDeadline || defaultData.rsvpDeadline,
    heroImage: d.heroImage || defaultData.heroImage,
    events: d.events && d.events.length > 0
      ? d.events.map((e): WeddingEvent => ({
          id: e.id,
          name: e.name,
          emoji: e.emoji,
          date: e.date,
          time: e.time,
          venue: e.venue,
          venueAddress: e.venueAddress,
          image: e.image || undefined,
          color: e.color,
          description: e.description,
        }))
      : defaultData.events,
    galleryImages: d.galleryImages && d.galleryImages.length > 0
      ? d.galleryImages.map((g): GalleryImage => ({
          src: g.src,
          alt: g.alt,
          span: g.span,
        }))
      : defaultData.galleryImages,
    coupleStory: d.coupleStory && d.coupleStory.length > 0
      ? d.coupleStory.map((s): StoryMilestone => ({
          date: s.date,
          title: s.title,
          description: s.description,
          icon: s.icon,
          image: s.image,
        }))
      : defaultData.coupleStory,
    familyBride: d.familyBride && d.familyBride.length > 0 ? d.familyBride : defaultData.familyBride,
    familyGroom: d.familyGroom && d.familyGroom.length > 0 ? d.familyGroom : defaultData.familyGroom,
    venue: {
      name: d.venueName || defaultData.venue.name,
      address: d.venueAddress || defaultData.venue.address,
      mapUrl: d.venueMapUrl || defaultData.venue.mapUrl,
    },
    rsvp: {
      whatsappNumber: d.rsvpPhone || defaultData.rsvp.whatsappNumber,
      message: d.rsvpMessage || defaultData.rsvp.message,
      deadline: d.rsvpDeadline || defaultData.rsvp.deadline,
    },
    socialLinks: {
      instagram: d.instagram || defaultData.socialLinks?.instagram,
    },
    ...(d.sections ? { sections: d.sections as Record<string, boolean> } : {}),
  }
  // Name order swap
  if (d.groomFirst === false) {
    const tmp = result.groomName; result.groomName = result.brideName; result.brideName = tmp
    const tmpP = result.groomParents; result.groomParents = result.brideParents; result.brideParents = tmpP
  }
  return result
}

export function WeddingDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<WeddingConfig>(defaultData)

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === 'VIVAHPATRA_UPDATE' && event.data.data) {
        setData(mapEditorToConfig(event.data.data))
      }
    }
    window.addEventListener('message', handleMessage)
if (window.parent !== window) {      window.parent.postMessage({ type: 'VIVAHPATRA_READY' }, '*')    }
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <WeddingDataContext.Provider value={data}>
      {children}
    </WeddingDataContext.Provider>
  )
}

export function useWeddingData(): WeddingConfig {
  return useContext(WeddingDataContext)
}
