# Gorrion Winter Camp 2024

## Jak zrealizować zadanie?

Przeczytaj [CONTRIBUTING.md](./CONTRIBUTING.md) i zastosuj się do instrukcji.

## Zadanie

Badania na stacji kosmicznej w przygotowaniu do podróży na Marsa:

Załoga stacji kosmicznej przygotowuje się do długotrwałego pobytu w kosmosie w ramach przygotowań do podróży na Marsa.

**W pliku `lib/crew.ts` przygotuj metodę do łączenia list astronautów, inżynierów i lekarzy z plików JSON i YAML.**

Warunki zaliczenia zadania:

1. Typ pojedyńczego członka zespołu powinien wyglądać w następujący sposób:

```ts
type CrewMember = {
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};
```

2. Lista członków zespołu powinna zawierać tylko osoby w wieku od 30 do 40 lat.

3. Stwórz endpoint w pliku `pages/api/crew.ts` i używając metody stworzonej w `lib/crew.ts` zwróć listę członków zespołu w formie tablicy. Lista powinna być posortowana po imieniu w kolejności alfabetycznej. Dane powinny być paginowane i zwracać po 8 osób na stronę. Endpoint powinien przyjmować parametr `page` i zwracać odpowiednią stronę.

4. Użyj `tanstack/react-query` lub `swr` do pobrania danych z endpointu i wyświetlenia ich w komponencie `pages/task/[page].tsx` w formie kart. Komponent powinien zawierać paginację i możliwość zmiany strony.

## Kryteria oceny

- Jakość kodu
- Użyte narzędzia
- Poprawność działania kodu

## Podpowiedzi

- możesz zainstalować dowolne bilbioteki potrzebne do realizacji zadania
- jeżeli brakuje danych, możesz je wymyślić lub wygenerować

### At the end of the task

Hi everyone,

a small update from my side:

- I have created a small library of dynamic components in tailwind ( in the future you can make a separate package from it and it can be used for other projects)
- Atomic Design approach
- I implemented storyBook so that components can be previewed.
- I tried to keep the principle of single responsibility.
- I created a Special hook to paginate pages in case the number of pages would be really large (usePagination)

I would like to hear your opinion on what can be improved

Greetings Jakub !
