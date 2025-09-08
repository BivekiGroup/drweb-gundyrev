"use client";

import {
  ArrowRight,
  Award,
  Building,
  CheckCircle,
  Clock,
  Code,
  Cpu,
  Fingerprint,
  Headphones,
  Lock,
  Mail,
  Menu,
  Monitor,
  Phone,
  Rocket,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useToast } from "@/components/ui/toast";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DrWebLanding() {
  

  type ContactForm = {
    name: string;
    phone: string;
    email: string;
    company: string;
    position: string;
    orgType: "corporate" | "government" | "non-profit";
    desktopDevices: string;
    serverDevices: string;
    mobileDevices: string;
    message: string;
  };

  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    phone: "",
    email: "",
    company: "",
    position: "",
    orgType: "corporate",
    desktopDevices: "",
    serverDevices: "",
    mobileDevices: "",
    message: "",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const { toast } = useToast();

  // Analytics helpers
  const reachGoal = (name: string, params?: Record<string, unknown>) => {
    try {
      // @ts-expect-error: Yandex.Metrica is injected globally at runtime
      if (typeof window !== "undefined" && window.ym) {
        // @ts-expect-error: Yandex.Metrica is injected globally at runtime
        window.ym(103917430, "reachGoal", name, params);
      }
    } catch {}
  };

  // Phone mask + helpers
  const formatRuPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    let d = digits;
    if (d.startsWith("8")) d = "7" + d.slice(1);
    if (!d.startsWith("7")) d = "7" + d;
    d = d.slice(0, 11);
    const parts = [
      "+7",
      d.slice(1, 4),
      d.slice(4, 7),
      d.slice(7, 9),
      d.slice(9, 11),
    ];
    let out = parts[0];
    if (parts[1]) out += ` ${parts[1]}`;
    if (parts[2]) out += ` ${parts[2]}`;
    if (parts[3]) out += `-${parts[3]}`;
    if (parts[4]) out += `-${parts[4]}`;
    return out;
  };

  const sanitizePhone = (value: string) => value.replace(/\D/g, "");

  const [errors, setErrors] = useState<Record<string, string>>({});

  type ValidatorMap = { [K in keyof ContactForm]: (v: ContactForm[K]) => string };

  const validators: ValidatorMap = useMemo(() => ({
    name: (v) => (String(v).trim().length >= 2 ? "" : "Введите имя (мин. 2 символа)"),
    phone: (v) => (sanitizePhone(String(v)).length === 11 ? "" : "Введите телефон в формате +7 XXX XXX-XX-XX"),
    email: (v) =>
      !v
        ? ""
        : /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/.test(String(v))
        ? ""
        : "Некорректный email",
    desktopDevices: (v) => (!v || Number(v) >= 0 ? "" : "Некорректное число"),
    serverDevices: (v) => (!v || Number(v) >= 0 ? "" : "Некорректное число"),
    mobileDevices: (v) => (!v || Number(v) >= 0 ? "" : "Некорректное число"),
    // No-op validators for optional fields
    company: () => "",
    position: () => "",
    orgType: () => "",
    message: () => "",
  }), []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const check = <K extends keyof ContactForm>(k: K) => {
      const v = contactForm[k];
      const fn = validators[k] as ((val: ContactForm[K]) => string) | undefined;
      if (fn) {
        const msg = fn(v);
        if (msg) newErrors[k as string] = msg;
      }
    };
    check("name");
    check("phone");
    check("email");
    check("desktopDevices");
    check("serverDevices");
    check("mobileDevices");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  

  const testimonials = [
    {
      name: "Александр Иванов",
      company:
        "МЕЖРЕГИОНАЛЬНОЕ УПРАВЛЕНИЕ РОСПОТРЕБНАДЗОРА ПО РЕСПУБЛИКЕ КРЫМ И ГОРОДУ СЕВАСТОПОЛЮ",
      text: "Dr.Web обеспечивает надежную защиту нашей IT-инфраструктуры. Российская разработка — это гарантия безопасности и независимости.",
      rating: 5,
    },
    {
      name: "Елена Петрова",
      company: 'МКУ "ХОЗУПРАВЛЕНИЕ"',
      text: "Переход на Dr.Web позволил сэкономить 35% бюджета на антивирусную защиту при повышении уровня безопасности.",
      rating: 5,
    },
    {
      name: "Дмитрий Сидоров",
      company: 'СПБ ГБУЗ "ГОРОДСКАЯ ПОЛИКЛИНИКА № 93"',
      text: "Централизованное управление упростило администрирование 15,000 рабочих мест. Отличная техподдержка.",
      rating: 5,
    },
    {
      name: "Михаил Козлов",
      company: 'ООО "ТЕХНОСФЕРА ПЛЮС"',
      text: "Гундырев М.А. - надежный партнер Dr.Web! Профессиональная консультация, быстрое внедрение и отличная поддержка. Рекомендуем как проверенного поставщика.",
      rating: 5,
    },
    {
      name: "Анна Васильева",
      company: 'ЗАО "ИНФОРМ-БЕЗОПАСНОСТЬ"',
      text: "Сотрудничаем с Гундырев.рф уже 2 года. Всегда выгодные цены, быстрая поставка лицензий Dr.Web и профессиональная техническая поддержка. Очень довольны!",
      rating: 5,
    },
    {
      name: "Сергей Николаев", 
      company: 'АО "ЦИФРОВЫЕ РЕШЕНИЯ УРАЛ"',
      text: "Гундырев Максим Алексеевич помог нам перейти на Dr.Web с минимальными затратами времени. Качественное сопровождение проекта и конкурентные цены.",
      rating: 5,
    }
  ];



  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Проверьте форму",
        description: "Заполните обязательные поля корректно",
        variant: "warning",
      });
      return;
    }
    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          contact: sanitizePhone(contactForm.phone) || contactForm.phone.trim(),
          message: contactForm.message,
          page: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      if (!res.ok) throw new Error("fail");
      // Analytics: lead success
      reachGoal("lead_success");
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
        variant: "success",
      });
      setContactForm({
        name: "",
        phone: "",
        email: "",
        company: "",
        position: "",
        orgType: "corporate",
        desktopDevices: "",
        serverDevices: "",
        mobileDevices: "",
        message: "",
      });
      setErrors({});
    } catch {
      reachGoal("lead_error");
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позже или позвоните нам",
        variant: "error",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 group">
              <div className="relative">
                <Image
                  src="/logo-drweb.svg"
                  alt="Dr.Web Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://гундырев.рф"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded hover:bg-green-100 transition-colors"
                  >
                    Гундырев.рф
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <nav className="flex space-x-4 xl:space-x-6">
                <a
                  href="#solutions"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Решения
                </a>
                <a
                  href="#services-header"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Услуги
                </a>
                <a
                  href="#contacts"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Контакты
                </a>
              </nav>
              <Button
                className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 hover:from-green-700 hover:via-green-800 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-smooth transform hover:-translate-y-1 hover:scale-102 text-sm xl:text-base"
                onClick={() => {
                  reachGoal("call_click", { place: "desktop_header" });
                  window.open("tel:+79930770168", "_self");
                }}
              >
                <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">+7 993 077-01-68</span>
                <span className="xl:hidden">Звонок</span>
              </Button>
            </div>

            {/* Tablet navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <Button
                className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white shadow-lg text-sm"
                onClick={() => {
                  reachGoal("call_click", { place: "tablet_header" });
                  window.open("tel:+79930770168", "_self");
                }}
              >
                <Phone className="w-3 h-3 mr-1" />
                Звонок
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile/Tablet Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 sm:py-6 border-t border-border animate-slide-down">
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="#solutions"
                  className="block text-sm sm:text-base font-medium py-2 hover:text-primary transition-colors"
                >
                  Решения
                </a>
                <a
                  href="#services-header"
                  className="block text-sm sm:text-base font-medium py-2 hover:text-primary transition-colors"
                >
                  Услуги
                </a>
                <a
                  href="#contacts"
                  className="block text-sm sm:text-base font-medium py-2 hover:text-primary transition-colors"
                >
                  Контакты
                </a>
                <Button
                  className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                  onClick={() => {
                    reachGoal("call_click", { place: "mobile_menu" });
                    window.open("tel:+79930770168", "_self");
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +7 993 077-01-68
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-background to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-lines parallax-lines"></div>
          <div className="hero-orb orb-1"></div>
          <div className="hero-orb orb-2"></div>
          <div className="hero-orb orb-3"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <div className="max-w-6xl mx-auto text-center">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
              Киберзащита для
              <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">госучреждений и бизнеса</span>
              </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Быстрее, легче и дешевле конкурентов. Всё по делу — за минуту вы поймёте, что нужно.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
                <Button
                  size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 hover:from-green-700 hover:via-green-800 hover:to-emerald-700 text-white shadow-2xl hover:shadow-green-lg transition-all duration-400 ease-smooth transform hover:-translate-y-1 hover:scale-[1.02]"
                  onClick={() => {
                  reachGoal('consult_cta_click', { place: 'hero_primary' });
                  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Headphones className="w-6 h-6 mr-3" />
                Бесплатная консультация
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                className="w-full sm:w-auto border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white shadow-xl transition-all duration-400 ease-smooth"
                  onClick={() => {
                  reachGoal('solution_cta_click', { place: 'hero_secondary' });
                  document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ShieldCheck className="w-6 h-6 mr-3" />
                Каталог решений
                </Button>
              </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                { number: 'Соответствие', text: 'нормам кибербезопасности РФ', icon: ShieldCheck, color: 'from-green-500 to-emerald-600' },
                { number: '30+', text: 'лет на рынке', icon: Award, color: 'from-yellow-500 to-orange-500' },
                { number: '44/223‑ФЗ', text: 'поставка', icon: Building, color: 'from-blue-500 to-indigo-500' },
                { number: 'Партнёр', text: 'Dr.Web', icon: Star, color: 'from-purple-500 to-pink-500' },
              ].map((stat, idx) => (
                <Card key={idx} className="text-center border-0 bg-background/80 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <stat.icon className="w-5 h-5 text-white" />
                      </div>
                    <div className="text-xl font-black text-foreground">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.text}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">Антивирус Dr.Web для госучреждений и образования</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-bold text-foreground mb-2">Доктор Веб для госучреждений</h3>
              <p>Соответствие требованиям ФСТЭК и ФСБ, поставка по 44‑ФЗ и 223‑ФЗ, централизованное управление и лицензирование по узлам. Подходит для ведомств, муниципалитетов и ГУПов.</p>
                      </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Доктор Веб для школы</h3>
              <p>Комплект для образовательных учреждений: защита рабочих станций учителей и серверов, фильтрация почты и лёгкое администрирование. Подходит для школ, колледжей и вузов.</p>
                      </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Антивирус для школы</h3>
              <p>Лицензирование по количеству узлов, поддержка Windows, Linux и macOS, техническая поддержка на русском 24/7. Возможно развертывание в изолированных сетях (air‑gapped).</p>
                      </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Для малого бизнеса</h3>
              <p>Готовый комплект «рабочие станции + почта + управление». Быстрый старт за 3 дня и экономия ТСО благодаря единому Центру управления.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-20 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20" data-animate id="solutions-header">
            <Badge
              variant="secondary"
              className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Комплексные решения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Выберите{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                идеальную защиту
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Коротко о ключевых продуктах. Никакой воды — только выгоды.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Building,
                title: "Комплект для школы",
                description:
                  "Защита компьютеров и серверов, фильтрация почты, простой контроль",
                features: ["ФСТЭК", "Центр управления"],
                price: "спец. цена",
                color: "from-green-500 to-emerald-600",
                popular: true,
                nodeType: "для образовательных учреждений",
              },
              {
                icon: Monitor,
                title: "Dr.Web Desktop Security Suite",
                description:
                  "Защита рабочих станций, в т.ч. виртуальных и терминальных клиентов",
                features: [
                  "ФСТЭК",
                  "Центр управления",
                ],
                price: "от 1900₽",
                color: "from-blue-500 to-blue-600",
                popular: false,
                nodeType: "за рабочую станцию",
              },
              {
                icon: Server,
                title: "Dr.Web Server Security Suite",
                description:
                  "Защита файловых и приложенческих серверов, в т.ч. виртуальных",
                features: [
                  "ФСТЭК",
                  "Центр управления",
                ],
                price: "от 4990₽",
                color: "from-purple-500 to-purple-600",
                popular: false,
                nodeType: "за сервер",
              },
              {
                icon: Building,
                title: "Комплект для малого бизнеса",
                description:
                  "Быстрый старт: рабочие станции + почта + управление",
                features: ["Экономия", "Простой запуск"],
                price: "спец. цена",
                color: "from-teal-500 to-cyan-600",
                popular: false,
                nodeType: "до 100 устройств",
              },
              {
                icon: Mail,
                title: "Dr.Web Mail Security Suite",
                description:
                  "Проверка почтового трафика (Unix, MS Exchange) + антиспам",
                features: [
                  "ФСТЭК",
                  "Антиспам",
                ],
                price: "от 7260₽",
                color: "from-orange-500 to-red-500",
                popular: false,
                nodeType: "за почтового пользователя",
              },
              {
                icon: Smartphone,
                title: "Dr.Web Mobile Security Suite",
                description:
                  "Защита Android и Аврора‑устройств с централизованным управлением",
                features: [
                  "ФСТЭК",
                  "Android/Аврора",
                ],
                price: "от 2500₽",
                color: "from-cyan-500 to-blue-600",
                popular: false,
                nodeType: "за мобильное устройство",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className={`relative group ${
                  visibleElements.has("solutions-header")
                    ? "animate-slide-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {solution.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg animate-pulse">
                      <Star className="w-4 h-4 mr-1" />
                      Лидер продаж
                    </Badge>
                  </div>
                )}
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-background/90 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>

                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">
                      {solution.title}
                    </CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <div className="text-2xl font-bold text-foreground">
                        {solution.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {solution.nodeType}
                      </div>
                    </div>
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => {
                        reachGoal("solution_cta_click", { title: solution.title });
                        document
                          .getElementById("contacts")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Заказать консультацию
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Government & Corporate Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-background to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className="text-center mb-20"
            data-animate
            id="gov-benefits-header"
          >

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Почему Dr.Web —{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                выгодный выбор
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Экономия бюджета, соответствие требованиям безопасности РФ,
              российская разработка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "Экономия бюджета до 40%",
                description:
                  "Dr.Web дешевле зарубежных аналогов при превосходном качестве защиты",
                stats: "40%",
                statsLabel: "экономия vs конкуренты",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: ShieldCheck,
                title: "Российская разработка с сертификатами",
                description:
                  "Сертификаты ФСТЭК, ФСБ. В реестре российского ПО, соответствие 152-ФЗ",
                stats: "30+",
                statsLabel: "лет разработки",
                color: "from-blue-500 to-purple-600",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`group ${
                  visibleElements.has("gov-benefits-header")
                    ? "animate-slide-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-background/90 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardContent className="p-8 relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    <div className="flex items-end space-x-2">
                      <div className="text-3xl font-black text-green-600">
                        {benefit.stats}
                      </div>
                      <div className="text-sm text-muted-foreground pb-1">
                        {benefit.statsLabel}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Compliance Badges */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Сертификаты и соответствие
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
                Dr.Web имеет все необходимые сертификаты для работы в госсекторе
                и защиты критически важной инфраструктуры
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {[
                {
                  name: "ФСТЭК России",
                  desc: "Сертификат по 2 уровню доверия",
                  icon: ShieldCheck,
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  name: "ФСБ России",
                  desc: "Сертификат безопасности",
                  icon: Lock,
                  color: "bg-red-100 text-red-800",
                },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <cert.icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">
                      {cert.name}
                    </h4>
                    <p className="text-sm font-semibold text-green-600">
                      {cert.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                <strong>23 продукта</strong> в Едином реестре российского ПО • Соответствие <strong>152-ФЗ</strong> • Используется в <strong>ГАС «Выборы»</strong>
              </p>
            </div>
          </div>
        </div>
      </section>


      

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden"
      >

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            data-animate
            id="testimonials-header"
          >

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              Что говорят{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                наши клиенты
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Более 10,000 довольных клиентов выбрали Dr.Web и Гундырев.рф для защиты своего
              бизнеса
            </p>
          </div>

          <div
            className={`max-w-4xl mx-auto ${
              visibleElements.has("testimonials-header")
                ? "animate-fade-in-up"
                : "opacity-0"
            }`}
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
                <blockquote className="text-xl md:text-2xl font-medium text-white mb-4 leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>
                <div className="text-purple-200 text-sm">
                  {testimonials[currentTestimonial].name} — {testimonials[currentTestimonial].company}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-background to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20" data-animate id="services-header">

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Полный спектр{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                услуг поддержки
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От предпродажного консультирования до экспертизы инцидентов — всё
              для вашей безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Cpu,
                title: "Dr.Web vxCube",
                description:
                  "Облачный интеллектуальный анализатор подозрительных объектов",
                features: [
                  "Анализ за 1 минуту",
                  "Немедленное изготовление лечащей утилиты",
                  "Подробный отчет",
                  "Для специалистов по ИБ",
                ],
                color: "from-blue-500 to-purple-600",
                badge: "Облачный сервис",
              },
              {
                icon: Users,
                title: "Антивирусные исследования",
                description:
                  "Анализ вредоносных файлов специалистами антивирусной лаборатории",
                features: [
                  "Анализ любой сложности",
                  "Описание алгоритмов работы",
                  "Категоризация объектов",
                  "Рекомендации по устранению",
                ],
                color: "from-green-500 to-emerald-600",
                badge: "Экспертиза",
              },
              {
                icon: Shield,
                title: "Экспертиза ВКИ",
                description:
                  "Квалифицированная экспертиза вирусозависимых компьютерных инцидентов",
                features: [
                  "Расследование инцидентов",
                  "Анализ последствий",
                  "Восстановление систем",
                  "Юридическое сопровождение",
                ],
                color: "from-red-500 to-pink-600",
                badge: "Спецподразделение",
              },
              {
                icon: Headphones,
                title: "Техническая поддержка",
                description: "Круглосуточная поддержка на русском языке",
                features: [
                  "24/7 по телефону",
                  "Через форму support.drweb.ru",
                  "Бесплатная расшифровка",
                  "VIP-поддержка",
                ],
                color: "from-orange-500 to-red-500",
                badge: "24/7",
              },
              {
                icon: Rocket,
                title: "Предпродажная поддержка",
                description: "Полное сопровождение процесса внедрения",
                features: [
                  "Бесплатное тестирование",
                  "Помощь при внедрении",
                  "Презентации и вебинары",
                  "Помощь с ТЗ",
                ],
                color: "from-indigo-500 to-purple-600",
                badge: "Бесплатно",
              },
              {
                icon: Code,
                title: "Dr.Web LiveDemo",
                description:
                  "Удаленное тестирование в виртуальной локальной сети",
                features: [
                  "Тестирование в облаке",
                  "Без установки",
                  "Полный функционал",
                  "Быстрый старт",
                ],
                color: "from-teal-500 to-green-600",
                badge: "Виртуальная сеть",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-background/90 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/90 text-gray-700"
                    >
                      {service.badge}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Support Contact Info */}
          <div className="mt-16 bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Контакты технической поддержки
                </h3>
                <p className="text-green-200">
                  Мы всегда готовы помочь с любыми вопросами
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Телефон</h4>
                  <p className="text-green-200">+7 993 077-01-68</p>
                  <p className="text-sm text-gray-300">Поддержка Гундырев.рф</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Email поддержка</h4>
                  <p className="text-blue-200">info@gundyrev.com</p>
                  <p className="text-sm text-gray-300">Поддержка Гундырев М.А.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Clock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Режим работы</h4>
                  <p className="text-purple-200">Пн-Пт 9:00-18:00</p>
                  <p className="text-sm text-gray-300">Московское время</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section
        id="contacts"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/50 to-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-animate id="contacts-header">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6">
              Получите{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                персональную консультацию
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Наши эксперты помогут подобрать оптимальное решение и рассчитают
              специальные условия
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            <div
              className={`${
                visibleElements.has("contacts-header")
                  ? "animate-slide-in-left"
                  : "opacity-0"
              }`}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Как с нами связаться
              </h3>
              <div className="space-y-6 sm:space-y-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 sm:p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg sm:text-xl mb-1 sm:mb-2">
                          Горячая линия
                        </h4>
                        <p className="text-muted-foreground text-base sm:text-lg font-semibold">
                          +7 993 077-01-68
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Бесплатно по России • Круглосуточно
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 sm:p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg sm:text-xl mb-1 sm:mb-2">
                          Email поддержка
                        </h4>
                        <p className="text-muted-foreground text-base sm:text-lg font-semibold">
                          info@gundyrev.com
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Ответ в течение 2 часов
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 sm:p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg sm:text-xl mb-1 sm:mb-2">
                          Режим работы
                        </h4>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          Пн-Пт: 9:00-18:00 МСК
                        </p>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          Техподдержка: 24/7
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Экстренная поддержка в выходные
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div
              className={`${
                visibleElements.has("contacts-header")
                  ? "animate-slide-in-right"
                  : "opacity-0"
              }`}
            >
              <Card className="border-0 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>

                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span>Запросить консультацию</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <Input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} onBlur={() => setErrors((p) => ({ ...p, name: validators.name?.(contactForm.name) ?? "" }))} aria-invalid={!!errors.name || undefined} placeholder="Имя" className="transition-all hover:border-green-300 focus:border-green-500 focus:ring-green-500/20" />
                      <Input type="tel" required value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: formatRuPhone(e.target.value) })} onBlur={() => setErrors((p) => ({ ...p, phone: validators.phone?.(contactForm.phone) ?? "" }))} aria-invalid={!!errors.phone || undefined} placeholder="Контакт (телефон)" className="transition-all hover:border-green-300 focus:border-green-500 focus:ring-green-500/20" />
                      </div>
                    <Textarea rows={3} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} placeholder="Коротко: сколько устройств и что нужно" className="transition-all hover:border-green-300 focus:border-green-500 focus:ring-green-500/20" />

                    <p className="text-xs text-muted-foreground text-center">Нажимая «Получить консультацию», вы соглашаетесь с <a href="/privacy" className="underline">Политикой конфиденциальности</a> и <a href="/terms" className="underline">Пользовательским соглашением</a>.</p>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 hover:from-green-700 hover:via-green-800 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-400 ease-smooth transform hover:-translate-y-1 hover:scale-102 py-5 text-lg font-bold"
                    >
                      <Rocket className="w-6 h-6 mr-3" />
                      Получить консультацию
                    </Button>

                    <p className="text-xs text-muted-foreground text-center flex items-center justify-center">
                      <Lock className="w-3 h-3 mr-1" />
                      Ваши данные защищены и не передаются третьим лицам
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
              </section>

      {/* Partner Block */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Гундырев М.А. официальный партнер{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Dr.Web
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Официальный начинающий партнер ООО «Доктор Веб» с прямыми поставками и специальными ценами
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                                    <h3 className="text-xl font-bold text-foreground">Сертифицированный поставщик</h3>
                <p className="text-sm text-muted-foreground">Официальный статус начинающего партнера Dr.Web</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Прямые поставки от производителя
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Специальные скидки до 35%
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Официальная гарантия качества
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Квалифицированная поддержка</h3>
                    <p className="text-sm text-muted-foreground">Эксперты с многолетним опытом</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Техподдержка 24/7 на русском языке
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Помощь при внедрении и настройке
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Обучение персонала работе с продуктом
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Быстрая доставка</h3>
                    <p className="text-sm text-muted-foreground">По всей России без задержек</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Мгновенная доставка лицензий
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Работаем без наценок
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Цены от производителя
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>


        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6 sm:mb-8 group">
                <Image
                  src="/logo-drweb.svg"
                  alt="Dr.Web Logo"
                  width={128}
                  height={128}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                <strong>Гундырев.рф</strong> - официальный начинающий партнер ООО «Доктор Веб» в России. 
                Индивидуальный предприниматель <strong>Гундырев М. А.</strong> специализируется на продаже и
                внедрении антивирусных решений Dr.Web для бизнеса и
                государственных учреждений.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="text-sm text-gray-400 p-6 bg-gray-800/50 rounded-lg border border-gray-600">
                  <p className="mb-4 text-green-400 font-semibold text-base">
                    О компании Гундырев.рф:
                  </p>
                  <div className="space-y-6">
                    <div>
                      <p className="font-medium text-gray-300 mb-3 text-sm">
                        Наши услуги:
                      </p>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Консультации по выбору решений</li>
                        <li>• Поставка лицензий Dr.Web</li>
                        <li>• Техническая поддержка</li>
                        <li>• Гарантированное сопровождение</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-300 mb-3 text-sm">
                        Контактная информация:
                      </p>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li><span className="text-gray-300">ИНН:</span> 637607810692</li>
                        <li><span className="text-gray-300">Телефон:</span> +7 993 077-01-68</li>
                        <li><span className="text-gray-300">Email:</span> info@gundyrev.com</li>
                        <li><span className="text-gray-300">Часы работы:</span> Пн-Пт 9:00-18:00</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-600 flex flex-col items-center justify-center text-center">
                  <Image
                    src="/logo_novice_partner.svg"
                    alt="Novice Partner Logo"
                    width={128}
                    height={128}
                    className="w-32 h-32 mb-4 hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <p className="font-bold text-green-400 text-lg mb-1">
                      Гундырев М.А.
                    </p>
                    <p className="text-gray-300 font-semibold">
                      Начинающий партнер ООО «Доктор Веб»
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      Официальный статус партнерства
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>
                  Информация на сайте носит справочный характер и не является публичной офертой. 
                  Окончательные условия поставки и цены уточняйте у менеджера.
                </p>
              </div>
              <div className="flex items-center space-x-3 text-green-400 font-semibold text-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-sm">🇷🇺</span>
                </div>
                <span>Сделано в России с любовью</span>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-8 flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span>Решения</span>
              </h4>
              <ul className="space-y-4 text-gray-300">
                
                <li className="hover:text-green-400 transition-colors cursor-pointer flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Desktop Security Suite</span>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Server Security Suite</span>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Mail Security Suite</span>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Mobile Security Suite</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-8 flex items-center space-x-2">
                <Phone className="w-6 h-6 text-green-400" />
                <span>Контакты</span>
              </h4>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center space-x-3 group cursor-pointer hover:text-green-400 transition-colors">
                  <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold">
                    +7 993 077-01-68
                  </span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer hover:text-green-400 transition-colors">
                  <Mail className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span>info@gundyrev.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <div>
                    <div>Пн-Пт: 9:00-18:00 МСК</div>
                    <Badge
                      variant="secondary"
                      className="text-sm text-green-400 bg-green-900/30 mt-1"
                    >
                      Техподдержка 24/7
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 mb-2">
                  &copy; 2025 Гундырев.рф Все права защищены.
                </p>
                <div className="text-xs text-gray-500">
                  <p>Сайт Гундырев.рф - официального партнера ООО «Доктор Веб» | ИП Гундырев М.А. | ИНН: 637607810692</p>
                  <p>Контакты: Гундырев Максим Алексеевич | +7 993 077-01-68 | info@gundyrev.com</p>
                  <p className="mt-1">
                    <span className="text-green-400">«Доктор Веб»</span> —
                    российский разработчик средств информационной безопасности с
                    1992 года
                  </p>
                  <p className="mt-1 text-gray-500">
                    Официальный сайт Dr.Web:{" "}
                    <a
                      href="https://www.drweb.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-400"
                    >
                      www.drweb.ru
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center text-sm">
                  <Fingerprint className="w-4 h-4 mr-1" />
                  ФСТЭК
                </div>
                <div className="flex items-center text-sm">
                  <ShieldCheck className="w-4 h-4 mr-1" />
                  ФСБ
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  РРПО
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
