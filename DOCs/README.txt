Links for project:
  https://github.com/yaroslavdomb/FullStack_React_TS_project/DOCS/fullstack-reatc-TS-project-page-1.png
  https://github.com/yaroslavdomb/FullStack_React_TS_project/DOCS/fullstack-reatc-TS-project-page-2.png
  https://github.com/yaroslavdomb/FullStack_React_TS_project/DOCS/fullstack-reatc-TS-project-page-3.png

GitHub link:
  https://github.com/yaroslavdomb/FullStack_React_TS_project

INSTALLATION
  npm create vite@latest book-viewer -- --template react-ts
  cd book-viewer
  npm install
  npm install react-icons
  npm install tailwindcss @tailwindcss/vite

RUN
  npm run dev

mockapi
  https://6a65fa9f06b3848d4b86f4bc.mockapi.io/api/v1/books

React components used:
  useState  = on ... 
  useEffect = on page loading / to set focus on proper input  modal field
  useId     = on SideBar Actions to prevent id duplication for search/filter
  useMemo   = for Provider functionality to automate tracking of search and category 
  useRef    = to point on field that can hold 2 different types (TextInput/Textarea)

Flowbite-React elements used:
  Button
  DropDown --> DropDownItem
  Label
  Modal --> ModalBody/ModalHeader
  Textarea
  TextInput
  Tooltip
  
  