'use client';

import { useState, useEffect } from "react";
import { 
  Shield, 
  Zap, 
  Headphones, 
  Monitor, 
  Globe,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Calculator,
  Star,
  Award,
  Users,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Target,
  TrendingUp,
  Lock,
  Cpu,
  Sparkles,
  Rocket,
  Crown,
  MessageCircle,
  MousePointer,
  Fingerprint,
  ShieldCheck,
  Building,
  Code,
  Server
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function DrWebLanding() {
  const [calculatorData, setCalculatorData] = useState({
    devices: 10,
    plan: 'desktop',
    months: 12
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const plans = {
    desktop: { name: 'Dr.Web Desktop Security Suite', basePrice: 990, description: 'Защита рабочих станций' },
    server: { name: 'Dr.Web Server Security Suite', basePrice: 4990, description: 'Защита серверов' },
    enterprise: { name: 'Dr.Web Enterprise Security Suite', basePrice: 1490, description: 'Корпоративная защита' },
    mail: { name: 'Dr.Web Mail Security Suite', basePrice: 2990, description: 'Защита почтовых серверов' }
  };

  const testimonials = [
    {
      name: "Алексей Петров",
      company: "ООО Техносфера",
      text: "Dr.Web защищает нашу сеть уже 5 лет. Ни одного серьезного инцидента! Рекомендую всем.",
      rating: 5
    },
    {
      name: "Мария Сидорова", 
      company: "АО Банк Развития",
      text: "Отличная техподдержка и надежная защита. Переехали с другого антивируса и не жалеем.",
      rating: 5
    },
    {
      name: "Игорь Волков",
      company: "Строительная компания",
      text: "Работает стабильно даже на старых компьютерах. Очень довольны качеством защиты.",
      rating: 5
    }
  ];

  const calculatePrice = () => {
    const plan = plans[calculatorData.plan as keyof typeof plans];
    const basePrice = plan.basePrice * calculatorData.devices;
    const discount = calculatorData.months >= 24 ? 0.8 : calculatorData.months >= 12 ? 0.9 : 1;
    return Math.round(basePrice * discount);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
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
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <img src="/drweb-logo.svg" alt="Dr.Web Logo" className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-white animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">Dr.Web</span>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                    <Crown className="w-3 h-3 mr-1" />
                    Премиум Партнер
                  </Badge>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#solutions" className="text-sm font-medium transition-colors hover:text-primary">
                  Решения
                </a>
                <a href="#calculator" className="text-sm font-medium transition-colors hover:text-primary">
                  Калькулятор
                </a>
                <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
                  Отзывы
                </a>
                <a href="#contacts" className="text-sm font-medium transition-colors hover:text-primary">
                  Контакты
                </a>
              </nav>
              <Button 
                className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 hover:from-green-700 hover:via-green-800 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-smooth transform hover:-translate-y-1 hover:scale-102"
                onClick={() => window.open('tel:+78007753132', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                8(800)775-31-32
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-border animate-slide-down">
              <div className="space-y-4">
                <a href="#solutions" className="block text-sm font-medium">Решения</a>
                <a href="#calculator" className="block text-sm font-medium">Калькулятор</a>
                <a href="#testimonials" className="block text-sm font-medium">Отзывы</a>
                <a href="#contacts" className="block text-sm font-medium">Контакты</a>
                <Button 
                  className="w-full"
                  onClick={() => window.open('tel:+78007753132', '_self')}
                >
                  8(800)775-31-32
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

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <Badge variant="secondary" className="inline-flex items-center bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 text-green-800 px-8 py-4 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center animate-spin-slow">
                    <span className="text-white text-sm font-bold">🇷🇺</span>
                  </div>
                  <span className="group-hover:scale-105 transition-transform">Сделано в России</span>
                  <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                </div>
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight">
                <span className="block animate-slide-in-left">Антивирус</span>
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-slide-in-left" style={{animationDelay: '0.2s'}}>Dr.Web®</span>
                <span className="block text-3xl md:text-4xl font-semibold mt-4 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                  надежность с <span className="text-green-600">30-летним стажем!</span>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Высокая надежность в обнаружении угроз. Быстрая реакция на появление новых вирусов. 
                Эффективная техническая поддержка на всех этапах. <span className="text-green-600 font-semibold">Защищено 500M+ устройств!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-scale-in" style={{animationDelay: '0.8s'}}>
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 hover:from-green-700 hover:via-green-800 hover:to-emerald-700 text-white shadow-2xl hover:shadow-green-lg transition-all duration-400 ease-smooth transform hover:-translate-y-2 hover:scale-102"
                >
                  <Calculator className="w-6 h-6 mr-3" />
                  Рассчитать стоимость
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group border-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-400 ease-smooth transform hover:-translate-y-2 hover:scale-102"
                >
                  <Headphones className="w-6 h-6 mr-3" />
                  Бесплатная консультация
                </Button>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{animationDelay: '1s'}}>
                {[
                  { number: "30+", text: "лет опыта", icon: Award, color: "from-yellow-500 to-orange-500" },
                  { number: "500M+", text: "защищенных устройств", icon: Shield, color: "from-green-500 to-emerald-500" },
                  { number: "24/7", text: "техподдержка", icon: Headphones, color: "from-blue-500 to-purple-500" },
                  { number: "99.9%", text: "обнаружение угроз", icon: Target, color: "from-red-500 to-pink-500" }
                ].map((stat, index) => (
                  <Card key={index} className="group text-center border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-125 transition-transform duration-300`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-black text-foreground mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.text}</div>
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
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-pulse-slow">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Защита активна</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Сканирование:</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Активно</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Угрозы:</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">0 найдено</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Обновления:</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">Актуальны</Badge>
                      </div>
                    </div>
                    <div className="mt-6 w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-progress" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>


        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20" data-animate id="solutions-header">
            <Badge variant="secondary" className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Комплексные решения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Выберите <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">идеальную защиту</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полная линейка продуктов Dr.Web для любых задач - от домашнего компьютера до корпоративной сети
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "Desktop Security",
                description: "Защита рабочих станций и персональных компьютеров",
                features: ["Антивирус + Антиспам", "Брандмауэр", "Родительский контроль", "Анти-вор"],
                price: "от 990₽",
                color: "from-blue-500 to-blue-600",
                popular: false
              },
              {
                icon: Server,
                title: "Server Security", 
                description: "Надежная защита серверов и серверных приложений",
                features: ["Файловый антивирус", "Почтовый антивирус", "HTTP-антивирус", "Управление"],
                price: "от 4990₽",
                color: "from-purple-500 to-purple-600",
                popular: false
              },
              {
                icon: Building,
                title: "Enterprise Security",
                description: "Централизованная защита корпоративной сети",
                features: ["Центр управления", "Групповые политики", "Отчеты", "Удаленная установка"],
                price: "от 1490₽",
                color: "from-green-500 to-emerald-600",
                popular: true
              },
              {
                icon: Mail,
                title: "Mail Security",
                description: "Защита почтовых серверов от спама и вирусов",
                features: ["Антиспам", "Антивирус", "Карантин", "Белые списки"],
                price: "от 2990₽",
                color: "from-orange-500 to-red-500",
                popular: false
              }
            ].map((solution, index) => (
              <div key={index} className={`relative group ${visibleElements.has('solutions-header') ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.1}s`}}>
                {solution.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg animate-pulse">
                      <Crown className="w-4 h-4 mr-1" />
                      Популярный выбор
                    </Badge>
                  </div>
                )}
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-background/90 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-2xl font-bold text-foreground mb-4">{solution.price}</div>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => window.open('https://www.drweb.ru/products/', '_blank')}
                    >
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
          <div className="tech-lines"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20" data-animate id="benefits-header">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Почему <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Dr.Web</span> - лучший выбор?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Уникальные технологии и 30-летний опыт делают Dr.Web самым надежным антивирусом
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Неубиваемая защита",
                description: "Самозащита от отключения вредоносами. Работает даже когда другие антивирусы сдаются.",
                stat: "99.9%",
                statLabel: "надежность"
              },
              {
                icon: Zap,
                title: "Молниеносная реакция",
                description: "Новые угрозы блокируются в течение часов, а не дней как у конкурентов.",
                stat: "< 1ч",
                statLabel: "реакция на угрозы"
              },
              {
                icon: Cpu,
                title: "Не тормозит систему",
                description: "Работает в фоне незаметно. Минимальное потребление ресурсов даже на старых ПК.",
                stat: "< 5%",
                statLabel: "нагрузка на CPU"
              },
              {
                icon: Globe,
                title: "Все платформы",
                description: "Единое решение для Windows, Linux, macOS, Android, iOS. Централизованное управление.",
                stat: "15+",
                statLabel: "поддерживаемых ОС"
              },
              {
                icon: Code,
                title: "Российская разработка",
                description: "Полный контроль над кодом. Соответствие требованиям безопасности РФ.",
                stat: "100%",
                statLabel: "контроль кода"
              },
              {
                icon: Headphones,
                title: "Премиум поддержка",
                description: "Техподдержка 24/7 на русском языке. Решаем любые вопросы быстро и профессионально.",
                stat: "24/7",
                statLabel: "техподдержка"
              }
            ].map((benefit, index) => (
              <div key={index} className={`group ${visibleElements.has('benefits-header') ? 'animate-slide-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.1}s`}}>
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:bg-gray-800/70 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{benefit.description}</p>
                    
                    <div className="flex items-end space-x-2">
                      <div className="text-3xl font-black text-green-400">{benefit.stat}</div>
                      <div className="text-sm text-gray-400 pb-1">{benefit.statLabel}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Why Choose Us Subsection */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Преимущества работы с нами</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Мы не просто продаем лицензии - мы предоставляем комплексную поддержку
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-600/5 to-blue-600/10 rounded-3xl"></div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {[
                  {
                    icon: Award,
                    title: "Сертифицированные специалисты",
                    description: "Эксперты Doctor Web с многолетним опытом",
                    accent: "border-l-4 border-l-blue-400"
                  },
                  {
                    icon: Rocket,
                    title: "Бесплатная доставка",
                    description: "Доставка лицензий по всей России за наш счет",
                    accent: "border-l-4 border-l-purple-400"
                  },
                  {
                    icon: Target,
                    title: "Официальные цены",
                    description: "Работаем без наценок, цены от производителя",
                    accent: "border-l-4 border-l-green-400"
                  },
                  {
                    icon: Headphones,
                    title: "Техподдержка 24/7",
                    description: "Помощь на всех этапах внедрения и использования",
                    accent: "border-l-4 border-l-orange-400"
                  },
                  {
                    icon: Users,
                    title: "Обучение персонала",
                    description: "Обучаем ваших сотрудников работе с продуктом",
                    accent: "border-l-4 border-l-pink-400"
                  },
                  {
                    icon: Shield,
                    title: "Гарантия качества",
                    description: "10,000+ довольных клиентов по всей стране",
                    accent: "border-l-4 border-l-emerald-400"
                  }
                ].map((item, index) => (
                  <div key={index} className={`bg-black/20 backdrop-blur-md ${item.accent} rounded-xl p-6 hover:bg-black/30 hover:transform hover:-translate-y-2 transition-all duration-300 group shadow-xl`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">{item.title}</h4>
                        <p className="text-gray-200 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="calculator-header">
            <Badge variant="secondary" className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Умный калькулятор
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Рассчитайте стоимость <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">за 30 секунд</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Точный расчет с учетом скидок и специальных предложений
            </p>
          </div>

          <Card className={`border-0 shadow-2xl overflow-hidden bg-white ${visibleElements.has('calculator-header') ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-green-600" />
                        Выберите решение
                      </label>
                      <div className="relative">
                        <select 
                          value={calculatorData.plan}
                          onChange={(e) => setCalculatorData({...calculatorData, plan: e.target.value})}
                          className="w-full p-5 border-2 border-input rounded-2xl focus:ring-4 focus:ring-green-500/30 focus:border-green-500 appearance-none bg-background text-foreground font-semibold shadow-lg hover:border-green-300 transition-all duration-300 cursor-pointer"
                        >
                          {Object.entries(plans).map(([key, plan]) => (
                            <option key={key} value={key}>{plan.name}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground pointer-events-none" />
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{plans[calculatorData.plan as keyof typeof plans].description}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-foreground mb-4 flex items-center justify-between">
                        <span className="flex items-center">
                          <Monitor className="w-5 h-5 mr-2 text-green-600" />
                          Количество устройств
                        </span>
                        <Badge variant="secondary" className="text-2xl font-black text-green-600 bg-green-100">{calculatorData.devices}</Badge>
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="1000"
                          value={calculatorData.devices}
                          onChange={(e) => setCalculatorData({...calculatorData, devices: parseInt(e.target.value)})}
                          className="w-full h-4 bg-secondary rounded-lg appearance-none cursor-pointer slider-dynamic transition-all duration-400 ease-smooth"
                          style={{
                            background: `linear-gradient(to right, #16a34a 0%, #16a34a ${(calculatorData.devices / 1000) * 100}%, #e5e7eb ${(calculatorData.devices / 1000) * 100}%, #e5e7eb 100%)`
                          }}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-3">
                          <span className="flex items-center"><MousePointer className="w-3 h-3 mr-1" /> 1</span>
                          <span>1000+</span>
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
                          {value: 6, label: '6 месяцев', discount: null, popular: false},
                          {value: 12, label: '1 год', discount: '10%', popular: true},
                          {value: 24, label: '2 года', discount: '20%', popular: false}
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
                            variant={calculatorData.months === option.value ? "default" : "outline"}
                            onClick={() => setCalculatorData({...calculatorData, months: option.value})}
                              className={`w-full p-5 text-center rounded-2xl border-2 transition-all duration-300 h-auto flex-col ${
                              calculatorData.months === option.value 
                                ? 'shadow-lg transform scale-105' 
                                : 'hover:shadow-md'
                              } ${option.popular ? 'mt-3' : ''}`}
                            >
                            <div className="font-bold text-lg">{option.label}</div>
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
                        <span className="text-muted-foreground font-medium">Продукт:</span>
                        <span className="font-bold text-foreground text-right max-w-xs truncate">{plans[calculatorData.plan as keyof typeof plans].name}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-green-200">
                        <span className="text-muted-foreground font-medium">Устройств:</span>
                        <span className="font-bold text-foreground">{calculatorData.devices} шт.</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-green-200">
                        <span className="text-muted-foreground font-medium">Период:</span>
                        <span className="font-bold text-foreground">{calculatorData.months} мес.</span>
                      </div>
                      {calculatorData.months >= 12 && (
                        <div className="flex justify-between items-center py-3 bg-background rounded-xl px-4">
                          <span className="flex items-center space-x-2 font-medium text-green-600">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Скидка:</span>
                          </span>
                          <Badge variant="secondary" className="bg-green-100 text-green-700 text-lg font-bold">{calculatorData.months >= 24 ? '20%' : '10%'}</Badge>
                        </div>
                      )}
                      
                      <Card className="bg-background shadow-lg border-0">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-foreground">Итого:</span>
                            <div className="text-right">
                              <div className="text-3xl font-black text-green-600">{calculatePrice().toLocaleString('ru')} ₽</div>
                              <div className="text-sm text-muted-foreground">за весь период</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-smooth transform hover:-translate-y-1 hover:scale-102 py-5 text-lg font-bold"
                        onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        <Rocket className="w-6 h-6 mr-3" />
                        Заказать лицензию
                      </Button>
                      
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                          Бесплатная доставка по всей России
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
      <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent"></div>
          <div className="stars-bg"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20" data-animate id="testimonials-header">
            <Badge variant="secondary" className="inline-flex items-center bg-purple-800/50 backdrop-blur-sm text-purple-200 px-6 py-3 rounded-full mb-6 border border-purple-700/50">
              <MessageCircle className="w-4 h-4 mr-2" />
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Что говорят <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">наши клиенты</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Более 10,000 довольных клиентов выбрали Dr.Web для защиты своего бизнеса
            </p>
          </div>

          <div className={`max-w-4xl mx-auto ${visibleElements.has('testimonials-header') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-xl text-white">{testimonials[currentTestimonial].name}</div>
                    <div className="text-purple-200">{testimonials[currentTestimonial].company}</div>
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
                      ? 'bg-green-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Client Logos */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <p className="text-purple-200 text-lg">Нам доверяют ведущие компании России</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[
                { name: "Сбербанк", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Sberbank_2020_logo.svg/2560px-Sberbank_2020_logo.svg.png" },
                { name: "Газпром", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Gazprom-Logo.svg/2560px-Gazprom-Logo.svg.png" },
                { name: "Роснефть", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Rosneft_logo.svg/2560px-Rosneft_logo.svg.png" },
                { name: "ВТБ", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VTB_logo.svg/2560px-VTB_logo.svg.png" },
                { name: "Россети", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rosseti_logo.svg/2560px-Rosseti_logo.svg.png" },
                { name: "Ростех", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rostec_Logo.svg/2560px-Rostec_Logo.svg.png" }
              ].map((company, i) => (
                <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-full h-12 flex items-center justify-center">
                      <img 
                        src={company.logo}
                        alt={`${company.name} логотип`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-white font-bold text-sm">${company.name}</span>`;
                          }
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="contacts-header">
            <Badge variant="secondary" className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Связаться с нами
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Получите <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">персональную консультацию</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наши эксперты помогут подобрать оптимальное решение и рассчитают специальные условия
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`${visibleElements.has('contacts-header') ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-foreground mb-8">Как с нами связаться</h3>
              <div className="space-y-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-xl mb-2">Горячая линия</h4>
                        <p className="text-muted-foreground text-lg font-semibold">8(800)775-31-32</p>
                        <p className="text-sm text-muted-foreground">Бесплатно по России • Круглосуточно</p>
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
                        <h4 className="font-bold text-foreground text-xl mb-2">Email поддержка</h4>
                        <p className="text-muted-foreground text-lg font-semibold">info@av-prog.ru</p>
                        <p className="text-sm text-muted-foreground">Ответ в течение 2 часов</p>
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
                        <h4 className="font-bold text-foreground text-xl mb-2">Режим работы</h4>
                        <p className="text-muted-foreground">Пн-Пт: 9:00-18:00 МСК</p>
                        <p className="text-muted-foreground">Техподдержка: 24/7</p>
                        <p className="text-sm text-muted-foreground">Экстренная поддержка в выходные</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>


              </div>
            </div>

            <div className={`${visibleElements.has('contacts-header') ? 'animate-slide-in-right' : 'opacity-0'}`}>
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
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
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
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
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
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
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
                        onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                        placeholder="Название компании"
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
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Опишите ваши потребности и мы подберем оптимальное решение..."
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

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-8 group">
                <img src="/drweb-logo.svg" alt="Dr.Web Logo" className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <span className="text-3xl font-bold">Dr.Web</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-green-800 text-green-300">
                      <Crown className="w-3 h-3 mr-1" />
                      Премиум Партнер
                    </Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Официальный премиум-партнер Doctor Web в России. 
                Продажа и внедрение антивирусных решений Dr.Web с 2003 года.
                Более 10,000 довольных клиентов по всей стране.
              </p>
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
                  <span className="text-lg font-semibold">8(800)775-31-32</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer hover:text-green-400 transition-colors">
                  <Mail className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span>info@av-prog.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <div>
                    <div>Пн-Пт: 9:00-18:00 МСК</div>
                    <Badge variant="secondary" className="text-sm text-green-400 bg-green-900/30 mt-1">Техподдержка 24/7</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2025 Dr.Web Премиум Партнер. Все права защищены.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <Badge variant="secondary" className="bg-gray-800 text-gray-400">
                  <Fingerprint className="w-4 h-4 mr-1" />
                  Лицензия ФСТЭК
                </Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-400">
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
