import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/logo.png';
import { useFooterNavigation } from '@/hooks/navigation/footer';

export default function FooterNavigation() {
  const { menu } = useFooterNavigation();

  return (
    <footer className="bg-neutral-800">
      <div className="container p-6 mx-auto pb-12">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Image
                src={Logo.src}
                width={150}
                height={150}
                alt=""
                className="py-4"
              />

              <p className="max-w-sm mt-2 text-sm text-gray-400">
                Página criada para educadores(as). Informações, dicas e
                materiais para auxílio da rotina docente.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {menu.map((m: any) => (
                <div key={m.title}>
                  <h3 className="text-white uppercase">{m.title}</h3>
                  {m.items.map((i: any) => (
                    <Link
                      key={i.title}
                      href={i.href}
                      className="block mt-2 text-sm text-gray-400 hover:underline"
                      aria-label={i.title}
                      title={i.title}
                    >
                      {i.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
