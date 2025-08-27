import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Shield, Users } from 'lucide-react';

export default function TermsOfService() {
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
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
                  Пользовательское соглашение
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
                  <FileText className="w-6 h-6 mr-3 text-green-600" />
                  1. Общие положения
                </h2>
                <p className="text-muted-foreground mb-4">
                  Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между ИП Гундырев М.А. (далее — «Компания», «мы») и пользователями сайта Гундырев.рф (далее — «Пользователи», «вы»).
                </p>
                <p className="text-muted-foreground mb-4">
                  Используя Сайт, вы принимаете условия настоящего Соглашения. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте Сайт.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  2. Предмет соглашения
                </h2>
                <p className="text-muted-foreground mb-4">
                  Компания предоставляет следующие услуги:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Консультации по продуктам Dr.Web</li>
                  <li>Расчет стоимости лицензий</li>
                  <li>Продажа лицензий Dr.Web</li>
                  <li>Техническая поддержка</li>
                  <li>Внедрение антивирусных решений</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-green-600" />
                  3. Права и обязанности пользователей
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Пользователи имеют право:</strong>
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Получать консультации по продуктам Dr.Web</li>
                  <li>Заказывать лицензии и услуги</li>
                  <li>Получать техническую поддержку</li>
                  <li>Отказаться от услуг в любое время</li>
                </ul>
                
                <p className="text-muted-foreground mb-4">
                  <strong>Пользователи обязуются:</strong>
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Предоставлять достоверную информацию</li>
                  <li>Не нарушать работу Сайта</li>
                  <li>Соблюдать законодательство РФ</li>
                  <li>Не использовать Сайт для незаконной деятельности</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-green-600" />
                  4. Интеллектуальная собственность
                </h2>
                <p className="text-muted-foreground mb-4">
                  Все материалы, размещенные на Сайте, включая тексты, изображения, логотипы, являются собственностью Компании или используются с разрешения правообладателей.
                </p>
                <p className="text-muted-foreground mb-4">
                  Запрещается копирование, распространение или использование материалов Сайта без письменного разрешения Компании.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-green-600" />
                  5. Ограничение ответственности
                </h2>
                <p className="text-muted-foreground mb-4">
                  Компания не несет ответственности за:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Косвенные убытки пользователей</li>
                  <li>Потерю данных по причинам, не зависящим от Компании</li>
                  <li>Действия третьих лиц</li>
                  <li>Технические сбои, не связанные с виной Компании</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Условия оплаты и доставки
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Оплата:</strong> Производится в рублях РФ согласно выставленным счетам.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Доставка:</strong> Лицензии доставляются в электронном виде в течение 1-2 рабочих дней после оплаты.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Возврат:</strong> Возможен в течение 14 дней с момента покупки при наличии технических проблем.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Конфиденциальность
                </h2>
                <p className="text-muted-foreground mb-4">
                  Компания обязуется сохранять конфиденциальность информации, полученной от пользователей, в соответствии с Политикой конфиденциальности.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Изменение условий
                </h2>
                <p className="text-muted-foreground mb-4">
                  Компания оставляет за собой право изменять условия настоящего Соглашения. Изменения вступают в силу с момента их публикации на Сайте.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Контактная информация
                </h2>
                <p className="text-muted-foreground mb-4">
                  По всем вопросам, связанным с настоящим Соглашением, обращайтесь:
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
                  Настоящее Соглашение может быть изменено. О любых изменениях мы будем уведомлять на этой странице.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
