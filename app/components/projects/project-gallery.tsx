import Image from 'next/image'

type ProjectGalleryItem = {
  src: string
  alt: string
}

export function ProjectGallery({
  images,
}: {
  images: ProjectGalleryItem[]
}) {
  return (
    <div>
      <h2 className="mb-4 text-base font-medium tracking-tight">Screens</h2>
      <div className="flex flex-wrap gap-6">
        {images.map((image) => (
          <div key={image.src} className="w-full max-w-[240px]">
            <Image
              src={image.src}
              alt={image.alt}
              width={1290}
              height={2796}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
