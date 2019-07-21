cd "C:/sdk/tools"
dir ..
./emulator -list-avds
./emulator -avd small_hdpi &
cd "D:\react_native\sample_calculator"
npm start &
code . &
echo Press Enter...
read