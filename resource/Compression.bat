echo "开始处理..."

for /R %%i in (*.png) do (
  pngquant -f --ext .png --quality 50-80 "%%i"
)

pause