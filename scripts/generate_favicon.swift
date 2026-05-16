import AppKit
import Foundation

struct OutputSpec {
  let path: String
  let size: CGFloat
  let padding: CGFloat
}

let args = CommandLine.arguments

guard args.count >= 2 else {
  fputs("Usage: generate_favicon.swift <input-image>\n", stderr)
  exit(1)
}

let inputPath = args[1]
guard let sourceImage = NSImage(contentsOfFile: inputPath) else {
  fputs("Could not load input image at \(inputPath)\n", stderr)
  exit(1)
}

let sourceSize = sourceImage.size
let squareSide = min(sourceSize.width, sourceSize.height) * 0.9
let cropOriginX = max(0, (sourceSize.width - squareSide) / 2)
let cropOriginY = max(0, ((sourceSize.height - squareSide) / 2) - (squareSide * 0.14))
let cropRect = NSRect(
  x: cropOriginX,
  y: cropOriginY,
  width: squareSide,
  height: squareSide
)

let outputs = [
  OutputSpec(
    path: "/Users/seandowdall/sean-blog/app/icon.png",
    size: 512,
    padding: 40
  ),
  OutputSpec(
    path: "/Users/seandowdall/sean-blog/app/apple-icon.png",
    size: 180,
    padding: 14
  ),
  OutputSpec(
    path: "/private/tmp/sean-favicon-32.png",
    size: 32,
    padding: 3
  ),
]

for output in outputs {
  let pixelSize = Int(output.size)
  guard
    let bitmap = NSBitmapImageRep(
      bitmapDataPlanes: nil,
      pixelsWide: pixelSize,
      pixelsHigh: pixelSize,
      bitsPerSample: 8,
      samplesPerPixel: 4,
      hasAlpha: true,
      isPlanar: false,
      colorSpaceName: .deviceRGB,
      bytesPerRow: 0,
      bitsPerPixel: 0
    )
  else {
    fputs("Could not create bitmap for \(output.path)\n", stderr)
    exit(1)
  }

  bitmap.size = NSSize(width: output.size, height: output.size)

  NSGraphicsContext.saveGraphicsState()
  guard let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
    fputs("Could not create graphics context for \(output.path)\n", stderr)
    exit(1)
  }

  NSGraphicsContext.current = context
  context.cgContext.clear(
    CGRect(x: 0, y: 0, width: output.size, height: output.size)
  )

  let drawRect = NSRect(
    x: output.padding,
    y: output.padding,
    width: output.size - (output.padding * 2),
    height: output.size - (output.padding * 2)
  )

  let clipPath = NSBezierPath(ovalIn: drawRect)
  clipPath.addClip()

  sourceImage.draw(
    in: drawRect,
    from: cropRect,
    operation: .copy,
    fraction: 1.0
  )

  NSGraphicsContext.restoreGraphicsState()

  guard let pngData = bitmap.representation(using: .png, properties: [:]) else {
    fputs("Could not encode PNG for \(output.path)\n", stderr)
    exit(1)
  }

  do {
    try pngData.write(to: URL(fileURLWithPath: output.path))
  } catch {
    fputs("Could not write \(output.path): \(error)\n", stderr)
    exit(1)
  }
}
