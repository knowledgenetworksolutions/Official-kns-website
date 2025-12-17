'use client'

export default function Partners() {
  const partners = [
    { name: 'Cisco', domain: 'cisco.com' },
    { name: 'Microsoft', domain: 'microsoft.com' },
    { name: 'CIW', domain: 'ciwcertified.com' },
    { name: 'Fortinet', domain: 'fortinet.com' },
    { name: 'VMWare', domain: 'vmware.com' },
    { name: 'Linux', domain: 'linux.org' },
    { name: 'CWNP', domain: 'cwnp.com' },
    { name: 'Comptia', domain: 'comptia.org' },
    { name: 'Exin', domain: 'exin.com' },
    { name: 'Ec - Council', domain: 'eccouncil.org' },
  ]

  const getLogoUrl = (domain: string) => {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=256`
  }

  // Duplicate partners for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section id="partners" className="py-8 sm:py-10 md:py-12 bg-white overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-scroll-left items-center">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center"
            >
              <img
                src={getLogoUrl(partner.domain)}
                alt={partner.name}
                className="object-contain w-16 h-16 md:w-32 md:h-32"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

