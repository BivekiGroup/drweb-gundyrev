# 🛡️ Dr.Web Landing Page

Лендинг для антивируса Dr.Web, созданный для Яндекс Директ. Одностраничник с калькулятором стоимости и формой контактов в фирменном стиле Dr.Web.

## 🚀 Особенности

- **Современный дизайн** в фирменных зеленых тонах Dr.Web
- **Адаптивная верстка** для всех устройств
- **Интерактивный калькулятор** стоимости лицензий
- **Форма обратной связи** с валидацией
- **SEO-оптимизация** для Яндекс Директ
- **Анимации и переходы** для лучшего UX
- **Российская локализация** и брендинг "Сделано в России"

## 🛠️ Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - утилитарный CSS фреймворк
- **React Hooks** - управление состоянием

## 📦 Установка и запуск

```bash
# Клонируйте репозиторий
git clone <repository-url>
cd odno

# Установите зависимости
npm install

# Запустите сервер разработки
npm run dev

# Откройте http://localhost:3000 в браузере
```

## 🏗️ Структура проекта

```
src/
├── app/
│   ├── globals.css      # Стили и брендинг Dr.Web
│   ├── layout.tsx       # Основной layout с мета-тегами
│   └── page.tsx         # Главная страница лендинга
```

## 🎨 Дизайн и брендинг

### Цветовая палитра
- **Основной зеленый**: `#16a34a` (Dr.Web green)
- **Темно-зеленый**: `#15803d` (hover состояния)
- **Светло-зеленый**: `#22c55e` (акценты)
- **Фон**: `#ffffff` (белый)
- **Текст**: `#1f2937` (темно-серый)

### Типографика
- **Шрифт**: Inter (с поддержкой кириллицы)
- **Заголовки**: жирные, крупные размеры
- **Текст**: читаемые размеры с хорошей контрастностью

## 📱 Секции лендинга

### 1. Header (Шапка)
- Логотип Dr.Web с фирменным крестом
- Навигация по секциям
- Телефон горячей линии

### 2. Hero Section (Главная секция)
- Яркий заголовок с уникальным торговым предложением
- Подчеркивание "Сделано в России"
- Две CTA кнопки: калькулятор и консультация

### 3. Benefits (Преимущества)
- 6 ключевых преимуществ Dr.Web
- Иконки и описания
- Hover эффекты для интерактивности

### 4. Calculator (Калькулятор)
- Выбор типа лицензии (Desktop, Server, Enterprise, Mail)
- Слайдер количества устройств (1-1000+)
- Выбор срока лицензии со скидками
- Автоматический расчет стоимости
- CTA кнопка заказа

### 5. Contacts (Контакты)
- Контактная информация партнера
- Преимущества работы с компанией
- Форма обратной связи с валидацией
- Согласие на обработку персональных данных

### 6. Footer (Подвал)
- Информация о компании
- Список решений Dr.Web
- Контактные данные
- Copyright информация

## 🔧 Калькулятор стоимости

Интерактивный калькулятор включает:

```typescript
// Типы лицензий и базовые цены
const plans = {
  desktop: { name: 'Dr.Web Desktop Security Suite', basePrice: 990 },
  server: { name: 'Dr.Web Server Security Suite', basePrice: 4990 },
  enterprise: { name: 'Dr.Web Enterprise Security Suite', basePrice: 1490 },
  mail: { name: 'Dr.Web Mail Security Suite', basePrice: 2990 }
};

// Система скидок
- 6 месяцев: без скидки
- 12 месяцев: скидка 10%
- 24 месяца: скидка 20%
```

## 📊 SEO и маркетинг

### Meta теги
- Оптимизированные title и description
- Keywords для антивирусной тематики
- Open Graph для социальных сетей
- Viewport для мобильных устройств

### Структура для Яндекс Директ
- Четкие CTA кнопки
- Выделенные преимущества
- Форма лидогенерации
- Телефоны и контакты

## 🎯 Конверсионные элементы

1. **Множественные CTA**: калькулятор, консультация, заказ
2. **Социальные доказательства**: "30 лет на рынке", сертификации
3. **Чувство срочности**: специальные скидки на долгосрочные лицензии
4. **Снижение барьеров**: бесплатная консультация и доставка

## 📈 Аналитика и отслеживание

Для интеграции с аналитикой добавьте:

```html
<!-- Google Analytics -->
<!-- Яндекс.Метрика -->
<!-- Коды отслеживания конверсий -->
```

## 🔒 Безопасность

- Валидация форм на клиенте и сервере
- Защита от спама в формах
- HTTPS для безопасной передачи данных

## 🚀 Деплой

```bash
# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm start
```

### Vercel (рекомендуется)
```bash
npx vercel --prod
```

### Другие платформы
- Netlify
- AWS Amplify
- DigitalOcean Apps

## 📞 Поддержка

При возникновении вопросов по лендингу:
- Email: support@example.com
- Telegram: @support

## 📝 Лицензия

Этот проект создан для коммерческого использования в рамках партнерской программы Dr.Web.

---

**🛡️ Dr.Web - надежность с 30-летним стажем!** 🇷🇺
