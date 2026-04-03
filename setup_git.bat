@echo off
echo Configurando Git para o projeto Portfolio...

REM Verifica se o Git está instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Git não está instalado. Por favor, instale o Git primeiro.
    echo Visite: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Inicializa o repositório se necessário
if not exist .git (
    echo Inicializando repositório Git...
    git init
)

REM Adiciona apenas os arquivos do projeto (ignora node_modules, dist, etc)
echo Adicionando arquivos do projeto...
git add package.json
git add package-lock.json
git add vite.config.ts
git add tsconfig.json
git add tsconfig.app.json
git add tsconfig.node.json
git add tailwind.config.js
git add postcss.config.js
git add eslint.config.js
git add index.html
git add README.md
git add .gitignore
git add src/
git add public/

REM Mostra o status
echo.
echo Status dos arquivos:
git status --porcelain

echo.
echo Arquivos prontos para commit!
echo Use "git commit -m 'mensagem'" para fazer o commit
echo Use "git remote add origin <url>" para conectar ao repositório remoto
echo Use "git push -u origin main" para enviar para o GitHub

pause
