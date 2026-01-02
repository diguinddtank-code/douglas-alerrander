import { 
  Briefcase, 
  Users, 
  BrainCircuit, 
  Heart,
  Zap,
  Fingerprint,
  Anchor,
  Sparkles,
  History
} from 'lucide-react';
import { NavItem, ServiceItem, Testimonial } from './types';

export const WHATSAPP_URL = "https://wa.me/55619197316";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sentimentos', href: '#motivos' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Relações Interpessoais',
    description: 'Entenda dinâmicas afetivas, melhore a comunicação e construa vínculos mais saudáveis.',
    icon: Users,
  },
  {
    id: '2',
    title: 'Vida & Propósito',
    description: 'Um espaço para reorganizar prioridades e alinhar suas escolhas com seus valores.',
    icon: Heart,
  },
  {
    id: '3',
    title: 'Carreira & Trabalho',
    description: 'Enfrente o burnout e a síndrome do impostor com equilíbrio e estratégia.',
    icon: Briefcase,
  },
  {
    id: '4',
    title: 'TCC',
    description: 'Abordagem estruturada para reestruturar pensamentos e comportamentos disfuncionais.',
    icon: BrainCircuit,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "A clareza que ganhei sobre meu trabalho foi transformadora. A abordagem prática fez toda a diferença.",
    author: "R. M.",
    role: "Paciente Online"
  },
  {
    id: '2',
    text: "Sempre tive dificuldade em me abrir, mas o ambiente seguro me permitiu entender meus padrões.",
    author: "J. C.",
    role: "Paciente Presencial"
  },
  {
    id: '3',
    text: "Sinto que tenho um espaço seguro para ser vulnerável sem julgamentos. O acolhimento é real.",
    author: "F. P.",
    role: "Paciente Online"
  },
  {
    id: '4',
    text: "Achava que terapia não era pra mim, mas hoje vejo como organização mental essencial.",
    author: "C. R.",
    role: "Paciente Presencial"
  },
  {
    id: '5',
    text: "A conexão humana transcende a tela. O atendimento online funciona perfeitamente.",
    author: "L. S.",
    role: "Paciente Online"
  },
  {
    id: '6',
    text: "Cada sessão traz um insight novo que levo para a semana toda. Profissional ímpar.",
    author: "M. V.",
    role: "Paciente Presencial"
  }
];

export const PAIN_POINTS = [
  {
    id: 'p1',
    title: "Ansiedade",
    desc: "A mente não para, o futuro assusta e o peito aperta.",
    response: "A ansiedade tenta controlar o futuro porque o presente parece inseguro. Vamos criar estratégias juntos para acalmar sua mente e devolver seu controle.",
    icon: Zap
  },
  {
    id: 'p2',
    title: "Relacionamentos",
    desc: "Ciclos repetitivos, ciúmes ou dificuldade de comunicação.",
    response: "Relações difíceis muitas vezes refletem necessidades não atendidas. Trabalharemos sua comunicação para construir vínculos mais leves e recíprocos.",
    icon: Users
  },
  {
    id: 'p3',
    title: "Carreira & Burnout",
    desc: "Cansaço extremo, pressão e falta de propósito.",
    response: "O esgotamento não é sinal de fraqueza, é sinal de que você foi forte por tempo demais sem pausas. Vamos redefinir limites.",
    icon: Anchor
  },
  {
    id: 'p4',
    title: "Quem sou eu?",
    desc: "Vontade de entender sua própria identidade e desejos.",
    response: "O autoconhecimento é a chave para a liberdade. Vamos investigar sua história e fortalecer quem você é de verdade.",
    icon: Fingerprint
  },
  {
    id: 'p5',
    title: "Baixa Autoestima",
    desc: "Sentimento constante de insuficiência ou comparação.",
    response: "Você não precisa ser perfeito para ser valioso. Vamos reconstruir sua autoimagem com compaixão e realidade.",
    icon: Sparkles
  },
  {
    id: 'p6',
    title: "Traumas Passados",
    desc: "Memórias que ainda doem e afetam o seu presente.",
    response: "O passado não precisa definir o seu futuro. Criaremos um espaço seguro para processar essas memórias e libertar seu presente.",
    icon: History
  }
];