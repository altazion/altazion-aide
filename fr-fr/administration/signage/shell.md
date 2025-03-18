# Déployer des bornes / écrans


## Périphériques

### Communication

#### Périphériques réseaux

Pour tous les périphériques communicant avec les devices via une interface réseau, nous vous conseillons de réaliser un plan d'adressage qui ne se modifiera pas facilement :
- en fixant les adresses IPs
- via une réservation DHCP
- en utilisant des noms DNS

Si vous utilisez un plan d'adressage totalement dynamique avec des adresses affectées en DHCP sans réservation, la communication avec les périphériques réseaux pourra être interrompu de façon plus ou moins régulière et/ou subir des lenteurs, pendant que le système essaiera de retrouver la nouvelle adresse IP.

Certains périphériques publient leurs positions via mDNS, Apple Bonjour, et autre système zeroconf. Dans ce cas, les périphériques devraient se reconnecter automatiquement sans difficultés, si vous utilisez le nom mDNS dans votre configuartion.

### Types de périphériques supportés

#### TPE

