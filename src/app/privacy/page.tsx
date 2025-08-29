import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности сайта Гундырев.рф — партнера Dr.Web. Описание обработки персональных данных и контактная информация.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Политика конфиденциальности — Гундырев.рф',
    description: 'Информация о сборе, хранении и обработке персональных данных на сайте партнера Dr.Web.',
    type: 'article',
    url: '/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <Link 
              href="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться на главную
            </Link>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
                  Политика конфиденциальности
                </h1>
                <p className="text-muted-foreground mt-2">
                  Гундырев.рф - официальный партнер Dr.Web
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-100">
              <div className="mb-8">
                <p className="text-muted-foreground">
                  <strong>Дата вступления в силу:</strong> 1 января 2025 года
                </p>
                <p className="text-muted-foreground">
                  <strong>Последнее обновление:</strong> 1 января 2025 года
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-green-600" />
                  1. Общие положения
                </h2>
                <p className="text-muted-foreground mb-4">
                  Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сайта Гундырев.рф (далее — «Сайт»), принадлежащего ИП Гундырев М.А.
                </p>
                <p className="text-muted-foreground mb-4">
                  Используя Сайт, вы соглашаетесь с условиями настоящей Политики. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте Сайт.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-green-600" />
                  2. Собираемая информация
                </h2>
                <p className="text-muted-foreground mb-4">
                  Мы собираем следующие типы персональных данных:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Контактная информация (имя, телефон, email)</li>
                  <li>Информация о компании (название, должность)</li>
                  <li>Техническая информация (IP-адрес, тип браузера)</li>
                  <li>Данные о взаимодействии с сайтом</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-green-600" />
                  3. Цели обработки данных
                </h2>
                <p className="text-muted-foreground mb-4">
                  Ваши персональные данные обрабатываются для следующих целей:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Предоставление консультаций по продуктам Dr.Web</li>
                  <li>Расчет стоимости лицензий</li>
                  <li>Обработка заявок на покупку</li>
                  <li>Техническая поддержка</li>
                  <li>Улучшение качества обслуживания</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-green-600" />
                  4. Передача данных третьим лицам
                </h2>
                <p className="text-muted-foreground mb-4">
                  Мы не передаем ваши персональные данные третьим лицам, за исключением случаев:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Когда это необходимо для выполнения договорных обязательств</li>
                  <li>По требованию законодательства РФ</li>
                  <li>С вашего явного согласия</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Безопасность данных
                </h2>
                <p className="text-muted-foreground mb-4">
                  Мы принимаем необходимые технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Ваши права
                </h2>
                <p className="text-muted-foreground mb-4">
                  Вы имеете право:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Получать информацию о том, какие данные мы обрабатываем</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления ваших данных</li>
                  <li>Отзывать согласие на обработку данных</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Контактная информация
                </h2>
                <p className="text-muted-foreground mb-4">
                  По всем вопросам, связанным с обработкой персональных данных, обращайтесь:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> info@gundyrev.com<br />
                    <strong>Телефон:</strong> +7 993 077-01-68<br />
                    <strong>ИП Гундырев М.А.</strong><br />
                    <strong>ИНН:</strong> 637607810692
                  </p>
                </div>
              </section>

              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  Настоящая Политика может быть изменена. О любых изменениях мы будем уведомлять на этой странице.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
