@echo off
echo Preparando para subir cambios a GitHub...
git add .
set /p commitMsg="Escribe un mensaje de actualizacion (o presiona Enter para mensaje por defecto): "
if "%commitMsg%"=="" set commitMsg="Actualizacion rápida - %date% %time%"

git commit -m "%commitMsg%"
echo Subiendo a GitHub...
git push origin main

echo ===================================================
echo EXITO: Cambios enviados a GitHub.
echo Vercel empezara el despliegue automaticamente.
echo ===================================================
