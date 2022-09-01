# be-13-restful-routing

In dieser Übung sollt ihr das bisher gelernte nutzen um die API eines Record Shops zu bauen.

### Anforderungen an API
* Man kann sich alle Records anzeigen lassen
* Man kann auf eine einzelne Record zugreifen
* Man kann neue Records hinzufügen
* Man kann Records bearbeiten
* Man kann Records löschen

### Weitere Anforderungen
* Bearbeiten und löschen ist nur dem Record Inhaber möglich. Er kann sich über Benutzername und Passwort authorisieren
* Jeder einzelne API Zugriff sollte geloggt werden. (Route, Methode, Uhrzeit und optional: zuückgegebener Status)

### Beispiel Record

```
{
  id: 123456,
  name: "Brothers in Arms",
  artist: "Dire Straits",
  year: 1985,
  genre: "Pop",
  producer: "Mark Knopfler",
}
```
