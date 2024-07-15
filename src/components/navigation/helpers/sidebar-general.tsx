import Image from 'next/image';
import Link from 'next/link';
import teacher from '@/assets/images/profiles/types/teacher.jpg';
import student from '@/assets/images/profiles/types/student.jpg';

export default function SidebarGeneralHelper() {
  return (
    <div className="relative select-none rounded-es-3xl rounded-br-3xl w-full px-6 py-4 bg-pink-300 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
      <div className="flex items-center justify-center">
        <Link href="/para-professores">
          <div className="px-2 text-center hover:cursor-pointer hover:opacity-80">
            <Image
              src={teacher.src}
              width={300}
              height={300}
              alt=""
              className="w-32 object-contain rounded-lg"
            />
            <h5 className="text-xs font-bold my-2">Para professores</h5>
          </div>
        </Link>
        <Link href="/para-alunos">
          <div className="px-2 text-center hover:cursor-pointer hover:opacity-80">
            <Image
              src={student.src}
              width={300}
              height={300}
              alt=""
              className="w-32 object-contain rounded-lg"
            />
            <h5 className="text-xs font-bold my-2">Para alunos</h5>
          </div>
        </Link>
      </div>
      <div className="pt-4">
        <h3 className="font-bold text-xs uppercase">Institucional</h3>
        <div>
          <Link href="/institucional/sobre-nos">
            <h5 className="text-sm my-2 hover:cursor-pointer hover:opacity-80">
              Sobre o blog
            </h5>
          </Link>
          <Link href="/institucional/contate-nos">
            <h5 className="text-sm my-2 hover:cursor-pointer hover:opacity-80">
              Fale Conosco
            </h5>
          </Link>
          <Link href="/institucional/politicas-privacidade">
            <h5 className="text-sm my-2 hover:cursor-pointer hover:opacity-80">
              Políticas Privacidade
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
