"use client";

import {
  ArrowRight,
  Award,
  Building,
  Calculator,
  CheckCircle,
  ChevronDown,
  Clock,
  Code,
  Cpu,
  Fingerprint,
  Globe,
  Headphones,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  MousePointer,
  Phone,
  Rocket,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

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
  const [calculatorData, setCalculatorData] = useState({
    devices: 10,
    plan: "enterprise",
    months: 12,
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    position: "",
    orgType: "corporate",
    devices: "",
    message: "",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());

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

  const plans = {
    enterprise: {
      name: "Dr.Web Enterprise Security Suite",
      basePrice: 6500,
      description: "Комплексная корпоративная защита",
      unit: "за узел сети",
    },
    desktop: {
      name: "Dr.Web Desktop Security Suite",
      basePrice: 1900,
      description: "Защита рабочих станций",
      unit: "за рабочую станцию",
    },
    server: {
      name: "Dr.Web Server Security Suite",
      basePrice: 4990,
      description: "Защита серверов",
      unit: "за сервер",
    },
    mail: {
      name: "Dr.Web Mail Security Suite",
      basePrice: 7260,
      description: "Защита почтовых серверов",
      unit: "за почтового пользователя",
    },
    mobile: {
      name: "Dr.Web Mobile Security Suite",
      basePrice: 2500,
      description: "Защита мобильных устройств",
      unit: "за мобильное устройство",
    },
  };

  const additionalOptions = {
    masterDownloader: {
      name: 'Право использования программы для ЭВМ "Мастер скачиваний" с расширенным функционалом',
      price: 1200,
      description: "Дополнительный функционал для загрузки файлов",
    },
  };

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
      text: "Централизованное управление Dr.Web Enterprise Suite упростило администрирование 15,000 рабочих мест. Отличная техподдержка.",
      rating: 5,
    },
  ];

  const calculatePrice = () => {
    const plan = plans[calculatorData.plan as keyof typeof plans];
    const basePrice = plan.basePrice * calculatorData.devices;
    // Скидки согласно новому руководству Dr.Web от 01.04.2025:
    // 12 месяцев: без скидки (1.0)
    // 24 месяца: 25% скидка (0.75)
    // 36 месяцев: 30% скидка (0.7)
    const discount =
      calculatorData.months >= 36
        ? 0.7
        : calculatorData.months >= 24
        ? 0.75
        : 1;

    // Всегда добавляем "Мастер скачиваний"
    const masterDownloaderPrice = additionalOptions.masterDownloader.price;

    return Math.round(basePrice * discount + masterDownloaderPrice);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
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
                <img
                  src="logo-drweb.svg"
                  alt="Dr.Web Logo"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">
                    Начинающий партнер
                  </span>
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
                  href="#calculator"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Калькулятор
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
                onClick={() => window.open("tel:+79871670168", "_self")}
              >
                <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">+7 987 167-01-68</span>
                <span className="xl:hidden">Звонок</span>
              </Button>
            </div>

            {/* Tablet navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <Button
                className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white shadow-lg text-sm"
                onClick={() => window.open("tel:+79871670168", "_self")}
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
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  href="#calculator"
                  className="block text-sm sm:text-base font-medium py-2 hover:text-primary transition-colors"
                >
                  Калькулятор
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
                  onClick={() => window.open("tel:+79871670168", "_self")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +7 987 167-01-68
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 via-background to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="text-left">
              <Badge
                variant="secondary"
                className="inline-flex items-center bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 text-green-800 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center animate-spin-slow">
                    <span className="text-white text-xs sm:text-sm font-bold">
                      🇷🇺
                    </span>
                  </div>
                  <span className="group-hover:scale-105 transition-transform text-sm sm:text-base">
                    Российская разработка • Госсектор
                  </span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 animate-pulse" />
                </div>
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight">
                <span className="block animate-slide-in-left">
                  Антивирус для
                </span>
                <span
                  className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-slide-in-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  госучреждений
                </span>
                <span
                  className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2 sm:mt-3 md:mt-4 animate-slide-in-left"
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="text-green-600">и корпораций</span>
                </span>
              </h1>

              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <span className="text-green-600 font-bold text-lg sm:text-xl lg:text-2xl">
                  Dr.Web экономит бюджет
                </span>{" "}
                — российское решение с 30-летним опытом. Централизованное
                управление, лицензирование по узлам, соответствие требованиям
                безопасности РФ.
                <span className="block mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg">
                  <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full font-semibold text-xs sm:text-sm">
                    ✓ ФСТЭК
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full font-semibold ml-1 sm:ml-2 text-xs sm:text-sm">
                    ✓ ФСБ
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full font-semibold ml-1 sm:ml-2 text-xs sm:text-sm">
                    ✓ Импортозамещение
                  </span>
                </span>
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-scale-in"
                style={{ animationDelay: "0.8s" }}
              >
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("calculator")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 hover:from-green-700 hover:via-green-800 hover:to-emerald-700 text-white shadow-2xl hover:shadow-green-lg transition-all duration-400 ease-smooth transform hover:-translate-y-2 hover:scale-102 text-sm sm:text-base"
                >
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                  <span className="hidden sm:inline">Рассчитать стоимость</span>
                  <span className="sm:hidden">Калькулятор</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById("contacts")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group border-2 sm:border-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-400 ease-smooth transform hover:-translate-y-2 hover:scale-102 text-sm sm:text-base"
                >
                  <Headphones className="w-6 h-6 mr-3" />
                  Бесплатная консультация
                </Button>
              </div>

              {/* Live Stats */}
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 animate-fade-in-up"
                style={{ animationDelay: "1s" }}
              >
                {[
                  {
                    number: "30+",
                    text: "лет опыта на рынке",
                    icon: Award,
                    color: "from-yellow-500 to-orange-500",
                  },
                  {
                    number: "500M+",
                    text: "защищенных устройств",
                    icon: Shield,
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    number: "24/7",
                    text: "техподдержка",
                    icon: Headphones,
                    color: "from-blue-500 to-purple-500",
                  },
                  {
                    number: "99.9%",
                    text: "обнаружение угроз",
                    icon: Target,
                    color: "from-red-500 to-pink-500",
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="group text-center border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                  >
                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-125 transition-transform duration-300`}
                      >
                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-black text-foreground mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {stat.text}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:block hidden">
              <Card className="relative w-full transform hover:scale-105 transition-transform duration-500 shadow-2xl border-0 bg-background/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Защита активна
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Сканирование:
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700"
                        >
                          Активно
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Угрозы:</span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700"
                        >
                          0 найдено
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Обновления:
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700"
                        >
                          Актуальны
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-6 w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-progress"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полная линейка продуктов Dr.Web для любых задач - от домашнего
              компьютера до корпоративной сети
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                icon: Building,
                title: "Dr.Web Enterprise Security Suite",
                description:
                  "Линейка программных продуктов, включающая защиту всех конечных устройств корпоративной сети, проверку почтового и интернет-трафиков, а также единый Центр управления",
                features: [
                  "Сертифицирован ФСТЭК России",
                  "Все продукты в одной лицензии",
                  "Поддержка Windows, Linux, macOS, Android",
                  "Единый Центр управления",
                ],
                price: "от 6500₽",
                color: "from-green-500 to-emerald-600",
                popular: true,
                nodeType: "за узел сети",
              },
              {
                icon: Monitor,
                title: "Dr.Web Desktop Security Suite",
                description:
                  "Защита рабочих станций, в том числе в среде виртуализации, клиентов терминальных и виртуальных серверов, клиентов встроенных систем",
                features: [
                  "Сертифицирован ФСТЭК России",
                  "В Реестре отечественного ПО",
                  "Поддержка Windows, Linux, macOS",
                  "Включает Центр управления",
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
                  "Защита файловых серверов и серверов приложений, в том числе терминальных и виртуальных",
                features: [
                  "Сертифицирован ФСТЭК России",
                  "В Реестре отечественного ПО",
                  "Поддержка Windows, Unix, macOS",
                  "Включает Центр управления",
                ],
                price: "от 4990₽",
                color: "from-purple-500 to-purple-600",
                popular: false,
                nodeType: "за сервер",
              },
              {
                icon: Mail,
                title: "Dr.Web Mail Security Suite",
                description:
                  "Проверка почтового трафика для Unix и Microsoft Exchange Server",
                features: [
                  "Сертифицирован ФСТЭК России",
                  "В Реестре отечественного ПО",
                  "Дополнительный компонент Антиспам",
                  "Включает Центр управления",
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
                  "Защита мобильных устройств и планшетов под управлением Android и Аврора",
                features: [
                  "Сертифицирован ФСТЭК России (Аврора)",
                  "В Реестре отечественного ПО",
                  "Поддержка Android и Аврора",
                  "Включает Центр управления",
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
                      onClick={() =>
                        document
                          .getElementById("contacts")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
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

      {/* Additional Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-3"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className="text-center mb-20"
            data-animate
            id="additional-solutions-header"
          >
            <Badge
              variant="secondary"
              className="inline-flex items-center bg-purple-100 text-purple-800 px-6 py-3 rounded-full mb-6"
            >
              <Shield className="w-4 h-4 mr-2" />
              Дополнительные решения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Специализированные{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                продукты Dr.Web
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Узкоспециализированные решения для особых задач защиты информации
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Globe,
                title: "Dr.Web Gateway Security Suite",
                description: "Проверка интернет-трафика для Unix-систем",
                features: [
                  "Сертифицирован ФСТЭК России",
                  "Защита от веб-угроз",
                  "Фильтрация контента",
                  "Центр управления",
                ],
                color: "from-indigo-500 to-purple-600",
              },
              {
                icon: Building,
                title: "Dr.Web Industrial",
                description:
                  "Защита АСУ ТП без остановки технологических процессов",
                features: [
                  "Сертифицирован ФСТЭК России",
                  "Для промышленных систем",
                  "Непрерывность процессов",
                  "Специальный режим работы",
                ],
                color: "from-gray-600 to-gray-800",
              },
              {
                icon: Monitor,
                title: "Dr.Web ATM Shield",
                description:
                  "Централизованная защита встроенных систем: банкоматов, терминалов",
                features: [
                  "Защита банкоматов",
                  "Защита терминалов",
                  "Защита мультикиосков",
                  "Включает Центр управления",
                ],
                color: "from-green-600 to-teal-600",
              },
              {
                icon: Code,
                title: "Dr.Web vxCube",
                description: "Анализатор подозрительных файлов (песочница)",
                features: [
                  "Облачная и on-premise версии",
                  "Анализ исполняемых файлов",
                  "Поддержка Java, Windows, Android",
                  "Анализ документов Office",
                ],
                color: "from-orange-500 to-red-600",
              },
              {
                icon: Target,
                title: "Dr.Web FixIt!",
                description: "Инструмент для выявления целевых атак",
                features: [
                  "Детальный анализ безопасности",
                  "Выявление целевых атак",
                  "Анализ уязвимостей",
                  "Экспертное сопровождение",
                ],
                color: "from-red-500 to-pink-600",
              },
              {
                icon: Shield,
                title: "Dr.Web Katana",
                description:
                  "Дополнительная защита при установленном антивирусе другого производителя",
                features: [
                  "Не конфликтует с другими АВ",
                  "Защита от новейших угроз",
                  "Защита от шифровальщиков",
                  "Business и Personal Edition",
                ],
                color: "from-cyan-500 to-blue-600",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className={`group ${
                  visibleElements.has("additional-solutions-header")
                    ? "animate-slide-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-background/90 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full mt-4"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        document
                          .getElementById("contacts")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Узнать подробнее
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
            <Badge
              variant="secondary"
              className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6"
            >
              <Building className="w-4 h-4 mr-2" />
              Для госучреждений и корпораций
            </Badge>
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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "Экономия бюджета до 40%",
                description:
                  "Dr.Web стоит значительно дешевле зарубежных аналогов при превосходящем качестве защиты",
                stats: "40%",
                statsLabel: "экономия vs конкуренты",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: ShieldCheck,
                title: "Полное соответствие требованиям",
                description:
                  "Сертификаты ФСТЭК, ФСБ, Минобороны. 23 продукта в едином реестре российского ПО, соответствие 152-ФЗ",
                stats: "100%",
                statsLabel: "соответствие требованиям",
                color: "from-blue-500 to-purple-600",
              },
              {
                icon: Award,
                title: "Российская разработка",
                description:
                  "Полный контроль над исходным кодом, отсутствие backdoor, независимость от санкций",
                stats: "30+",
                statsLabel: "лет российской разработки",
                color: "from-red-500 to-pink-600",
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              {[
                {
                  name: "ФСТЭК России",
                  desc: "Сертификат по 2 уровню доверия",
                  details:
                    "Соответствие требованиям по безопасности информации и профилям защиты САВЗ типа А, Б, В, Г второго класса защиты",
                  icon: ShieldCheck,
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  name: "Минобороны России",
                  desc: "Сертификат соответствия",
                  details:
                    "Соответствие приказу Министра обороны РФ № 058 от 1996 года и профилям защиты САВЗ",
                  icon: Award,
                  color: "bg-green-100 text-green-800",
                },
                {
                  name: "ФСБ России",
                  desc: "Сертификат безопасности",
                  details:
                    "Соответствие требованиям к программным антивирусным средствам для органов ФСБ",
                  icon: Lock,
                  color: "bg-red-100 text-red-800",
                },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2 text-base sm:text-lg">
                      {cert.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-green-600 mb-2 sm:mb-3">
                      {cert.desc}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cert.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {[
                {
                  name: "Единый реестр ПО",
                  desc: "23 продукта Dr.Web в реестре РФ",
                  icon: Code,
                  color: "bg-purple-100 text-purple-800",
                },
                {
                  name: "152-ФЗ",
                  desc: "Защита персональных данных",
                  icon: Fingerprint,
                  color: "bg-orange-100 text-orange-800",
                },
                {
                  name: "ГАС «Выборы»",
                  desc: "Все выборы в России",
                  icon: Users,
                  color: "bg-indigo-100 text-indigo-800",
                },
                {
                  name: "Импортозамещение",
                  desc: "Российская разработка",
                  icon: Globe,
                  color: "bg-emerald-100 text-emerald-800",
                },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <CardContent className="p-3 sm:p-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${cert.color} rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <cert.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h5 className="font-bold text-foreground mb-1 text-xs sm:text-sm">
                      {cert.name}
                    </h5>
                    <p className="text-xs text-muted-foreground leading-tight">{cert.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-animate
            id="calculator-header"
          >
            <Badge
              variant="secondary"
              className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Умный калькулятор
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Рассчитайте стоимость{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                за 30 секунд
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Точный расчет с учетом скидок и специальных предложений
            </p>
          </div>

          <Card
            className={`border-0 shadow-2xl overflow-hidden bg-white ${
              visibleElements.has("calculator-header")
                ? "animate-scale-in"
                : "opacity-0"
            }`}
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-600" />
                      Выберите решение
                    </label>
                    <div className="relative">
                      <select
                        value={calculatorData.plan}
                        onChange={(e) =>
                          setCalculatorData({
                            ...calculatorData,
                            plan: e.target.value,
                          })
                        }
                        className="w-full p-5 border-2 border-input rounded-2xl focus:ring-4 focus:ring-green-500/30 focus:border-green-500 appearance-none bg-background text-foreground font-semibold shadow-lg hover:border-green-300 transition-all duration-300 cursor-pointer"
                      >
                        {Object.entries(plans).map(([key, plan]) => (
                          <option key={key} value={key}>
                            {plan.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground pointer-events-none" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {
                        plans[calculatorData.plan as keyof typeof plans]
                          .description
                      }
                    </p>
                    <p className="mt-1 text-xs text-green-600 font-semibold">
                      Лицензирование:{" "}
                      {plans[calculatorData.plan as keyof typeof plans].unit}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-4 flex items-center justify-between">
                      <span className="flex items-center">
                        <Monitor className="w-5 h-5 mr-2 text-green-600" />
                        Количество лицензий
                      </span>
                      <Badge
                        variant="secondary"
                        className="text-2xl font-black text-green-600 bg-green-100"
                      >
                        {calculatorData.devices}
                      </Badge>
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="1"
                        max="1000"
                        value={calculatorData.devices}
                        onChange={(e) =>
                          setCalculatorData({
                            ...calculatorData,
                            devices: parseInt(e.target.value),
                          })
                        }
                        className="w-full h-4 bg-secondary rounded-lg appearance-none cursor-pointer slider-dynamic transition-all duration-400 ease-smooth"
                        style={{
                          background: `linear-gradient(to right, #16a34a 0%, #16a34a ${
                            (calculatorData.devices / 1000) * 100
                          }%, #e5e7eb ${
                            (calculatorData.devices / 1000) * 100
                          }%, #e5e7eb 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-3">
                        <span className="flex items-center">
                          <MousePointer className="w-3 h-3 mr-1" /> 1
                        </span>
                        <span>1000+</span>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-green-600 font-semibold">
                      <p>
                        Лицензирование:{" "}
                        {plans[calculatorData.plan as keyof typeof plans].unit}
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p>• По числу защищаемых рабочих станций</p>
                        <p>• По числу клиентов терминального сервера</p>
                        <p>• По числу клиентов виртуального сервера</p>
                        <p>• По числу клиентов встроенных систем</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-4 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      Срок лицензии
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        {
                          value: 12,
                          label: "1 год",
                          discount: null,
                          popular: false,
                        },
                        {
                          value: 24,
                          label: "2 года",
                          discount: "25%",
                          popular: true,
                        },
                        {
                          value: 36,
                          label: "3 года",
                          discount: "30%",
                          popular: false,
                        },
                      ].map((option) => (
                        <div key={option.value} className="relative">
                          {option.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs px-3 py-1 whitespace-nowrap">
                                Популярно
                              </Badge>
                            </div>
                          )}
                          <Button
                            variant={
                              calculatorData.months === option.value
                                ? "default"
                                : "outline"
                            }
                            onClick={() =>
                              setCalculatorData({
                                ...calculatorData,
                                months: option.value,
                              })
                            }
                            className={`w-full p-5 text-center rounded-2xl border-2 transition-all duration-300 h-auto flex-col ${
                              calculatorData.months === option.value
                                ? "shadow-lg transform scale-105"
                                : "hover:shadow-md"
                            } ${option.popular ? "mt-3" : ""}`}
                          >
                            <div className="font-bold text-lg">
                              {option.label}
                            </div>
                            {option.discount && (
                              <div className="text-xs text-green-600 font-bold mt-1 flex items-center justify-center">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                скидка {option.discount}
                              </div>
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-white" />
                      </div>
                      <span>Расчет стоимости</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-green-200">
                      <span className="text-muted-foreground font-medium">
                        Продукт:
                      </span>
                      <span className="font-bold text-foreground text-right max-w-xs truncate">
                        {plans[calculatorData.plan as keyof typeof plans].name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-green-200">
                      <span className="text-muted-foreground font-medium">
                        Устройств:
                      </span>
                      <span className="font-bold text-foreground">
                        {calculatorData.devices} шт.
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-green-200">
                      <span className="text-muted-foreground font-medium">
                        Период:
                      </span>
                      <span className="font-bold text-foreground">
                        {calculatorData.months} мес.
                      </span>
                    </div>
                    {calculatorData.months >= 24 && (
                      <div className="flex justify-between items-center py-3 bg-background rounded-xl px-4">
                        <span className="flex items-center space-x-2 font-medium text-green-600">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Скидка:</span>
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700 text-lg font-bold"
                        >
                          {calculatorData.months >= 36 ? "20%" : "10%"}
                        </Badge>
                      </div>
                    )}

                    <div className="flex justify-between items-center py-3 border-b border-green-200">
                      <span className="text-muted-foreground font-medium">
                        Дополнительно:
                      </span>
                      <div className="text-right">
                        <div className="font-bold text-foreground">
                          Мастер скачиваний
                        </div>
                        <div className="text-xs text-green-600">
                          {additionalOptions.masterDownloader.price.toLocaleString(
                            "ru"
                          )}{" "}
                          ₽
                        </div>
                      </div>
                    </div>

                    <Card className="bg-background shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-foreground">
                            Итого:
                          </span>
                          <div className="text-right">
                            <div className="text-3xl font-black text-green-600">
                              до {calculatePrice().toLocaleString("ru")} ₽
                            </div>
                            <div className="text-sm text-muted-foreground">
                              за весь период
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-smooth transform hover:-translate-y-1 hover:scale-102 py-5 text-lg font-bold"
                      onClick={() =>
                        document
                          .getElementById("contacts")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      <Rocket className="w-6 h-6 mr-3" />
                      Заказать лицензию
                    </Button>

                    <div className="text-center">
                      <p className="text-xs text-muted-foreground flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                        Быстрая доставка по всей России
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden"
      >

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className="text-center mb-20"
            data-animate
            id="testimonials-header"
          >
            <Badge
              variant="secondary"
              className="inline-flex items-center bg-gray-700/50 backdrop-blur-sm text-gray-200 px-6 py-3 rounded-full mb-6 border border-gray-600/50"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Что говорят{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                наши клиенты
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Более 10,000 довольных клиентов выбрали Dr.Web для защиты своего
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
              <CardContent className="p-12 text-center">
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-xl text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-purple-200">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full p-0 transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-green-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-background to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20" data-animate id="services-header">
            <Badge
              variant="secondary"
              className="inline-flex items-center bg-purple-100 text-purple-800 px-6 py-3 rounded-full mb-6"
            >
              <Headphones className="w-4 h-4 mr-2" />
              Услуги и поддержка
            </Badge>
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
                  <p className="text-green-200">+7 987 167-01-68</p>
                  <p className="text-sm text-gray-300">Партнерская поддержка</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Email поддержка</h4>
                  <p className="text-blue-200">info@gundyrev.com</p>
                  <p className="text-sm text-gray-300">Партнерская поддержка</p>
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
        className="py-20 bg-gradient-to-br from-muted/50 to-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="contacts-header">
            <Badge
              variant="secondary"
              className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6"
            >
              <Phone className="w-4 h-4 mr-2" />
              Связаться с нами
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Получите{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                персональную консультацию
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наши эксперты помогут подобрать оптимальное решение и рассчитают
              специальные условия
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className={`${
                visibleElements.has("contacts-header")
                  ? "animate-slide-in-left"
                  : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Как с нами связаться
              </h3>
              <div className="space-y-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-xl mb-2">
                          Горячая линия
                        </h4>
                        <p className="text-muted-foreground text-lg font-semibold">
                          +7 987 167-01-68
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Бесплатно по России • Круглосуточно
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-xl mb-2">
                          Email поддержка
                        </h4>
                        <p className="text-muted-foreground text-lg font-semibold">
                          info@gundyrev.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Ответ в течение 2 часов
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-xl mb-2">
                          Режим работы
                        </h4>
                        <p className="text-muted-foreground">
                          Пн-Пт: 9:00-18:00 МСК
                        </p>
                        <p className="text-muted-foreground">
                          Техподдержка: 24/7
                        </p>
                        <p className="text-sm text-muted-foreground">
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

                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-white" />
                    </div>
                    <span>Запросить консультацию</span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-3">
                          Имя *
                        </label>
                        <Input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Ваше имя"
                          className="transition-all duration-400 ease-smooth hover:border-green-300 focus:border-green-500 focus:ring-green-500/20"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-3">
                          Телефон *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+7 (000) 000-00-00"
                          className="transition-all duration-400 ease-smooth hover:border-green-300 focus:border-green-500 focus:ring-green-500/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value,
                          })
                        }
                        placeholder="email@example.com"
                        className="transition-all duration-400 ease-smooth hover:border-green-300 focus:border-green-500 focus:ring-green-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3">
                        Компания
                      </label>
                      <Input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            company: e.target.value,
                          })
                        }
                        placeholder="Название компании"
                        className="transition-all duration-400 ease-smooth hover:border-green-300 focus:border-green-500 focus:ring-green-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3">
                        Позиция
                      </label>
                      <Input
                        type="text"
                        value={contactForm.position}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            position: e.target.value,
                          })
                        }
                        placeholder="Название должности"
                        className="transition-all duration-400 ease-smooth hover:border-green-300 focus:border-green-500 focus:ring-green-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3">
                        Тип организации
                      </label>
                      <select
                        value={contactForm.orgType}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            orgType: e.target.value,
                          })
                        }
                        className="w-full p-5 border-2 border-input rounded-2xl focus:ring-4 focus:ring-green-500/30 focus:border-green-500 appearance-none bg-background text-foreground font-semibold shadow-lg hover:border-green-300 transition-all duration-300 cursor-pointer"
                      >
                        <option value="corporate">Бизнес</option>
                        <option value="government">
                          Государственный орган
                        </option>
                        <option value="non-profit">
                          Некоммерческая организация
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3">
                        Количество устройств
                      </label>
                      <Input
                        type="number"
                        value={contactForm.devices}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            devices: e.target.value,
                          })
                        }
                        placeholder="Введите количество устройств"
                        className="transition-all duration-400 ease-smooth hover:border-green-300 focus:border-green-500 focus:ring-green-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-3">
                        Чем можем помочь?
                      </label>
                      <Textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Опишите ваши потребности в антивирусной защите, планируемые сроки внедрения, особые требования..."
                        className="transition-all duration-400 ease-smooth hover:border-green-300 focus:border-green-500 focus:ring-green-500/20"
                      />
                    </div>

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
            <Badge
              variant="secondary"
              className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full mb-6"
            >
              <Award className="w-4 h-4 mr-2" />
              Официальное партнерство
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Мы сотрудничаем с{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Dr.Web
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Официальный начинающий партнер ООО «Доктор Веб» с прямыми поставками и партнерскими ценами
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
                    <h3 className="text-xl font-bold text-foreground">Сертифицированный партнер</h3>
                    <p className="text-sm text-muted-foreground">Официальный статус начинающего партнера</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Прямые поставки от производителя
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Партнерские скидки до 35%
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
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8 group">
                <img
                  src="logo-drweb.svg"
                  alt="Dr.Web Logo"
                  className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <span className="text-2xl sm:text-3xl font-bold">Dr.Web</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Официальный начинающий партнер ООО «Доктор Веб» в России. Продажа и
                внедрение антивирусных решений Dr.Web для бизнеса и
                государственных учреждений. Более 10,000 довольных клиентов по
                всей стране.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="text-sm text-gray-400 p-6 bg-gray-800/50 rounded-lg border border-gray-600">
                  <p className="mb-4 text-green-400 font-semibold text-base">
                    О компании-партнере:
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
                        <li><span className="text-gray-300">Телефон:</span> +7 987 167-01-68</li>
                        <li><span className="text-gray-300">Email:</span> info@gundyrev.com</li>
                        <li><span className="text-gray-300">Часы работы:</span> Пн-Пт 9:00-18:00</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-600 flex flex-col items-center justify-center text-center">
                  <img
                    src="logo_novice_partner.svg"
                    alt="Novice Partner Logo"
                    className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mb-4 hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <p className="font-bold text-green-400 text-lg mb-1">
                      Начинающий партнер
                    </p>
                    <p className="text-gray-300 font-semibold">
                      ООО «Доктор Веб»
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
                  <span>Enterprise Security Suite</span>
                </li>
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
                    +7 987 167-01-68
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
                  &copy; 2025 ИП Гундырев Д.С. Все права защищены.
                </p>
                <div className="text-xs text-gray-500">
                  <p>Сайт партнера ООО «Доктор Веб» | ИНН: 637607810692</p>
                  <p>Контакты партнера: +7 987 167-01-68 | info@gundyrev.com</p>
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
                <Badge
                  variant="secondary"
                  className="bg-gray-800 text-gray-400"
                >
                  <Fingerprint className="w-4 h-4 mr-1" />
                  Лицензия ФСТЭК
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-800 text-gray-400"
                >
                  <ShieldCheck className="w-4 h-4 mr-1" />
                  Сертификат ФСБ
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
