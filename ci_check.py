#!/usr/bin/env python3
import subprocess
import sys
import os
print("Rozpoczynam próbę zainstalowania bibliotek i zależności")
inicjalizacja = subprocess.run(["npm", "install"], capture_output=True)
if inicjalizacja.returncode == 0:
    print("SUKCES: poprawnie zainstalowano biblioteki i zależności")
else:
    print("BŁĄD: Wystąpił błąd w instalowaniu bibliotek i zależności")
    sys.exit(1)

print("Rozpoczynam próbę zbudowania aplikacji")
budowanie = subprocess.run(["npm", "run", "build"], capture_output=True)
if budowanie.returncode == 0 and os.path.exists("dist"):
    print("SUKCES: poprawnie zbudowano aplikację")
else:
    print("BŁĄD: Wystąpił błąd podczas budowania aplikacji")
    sys.exit(1)