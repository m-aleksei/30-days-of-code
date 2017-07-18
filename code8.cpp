#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <cstring>
#include <map>
using namespace std;


int main() {
    int n;
    int i;
    cin >> n;
    map <string,string> myFirstMap; // объявление map
    char name[12];
    char tel[12];
    bool ended = true;
    for (i = 1; i <= n; i++) {
        cin >> name;
        cin >> tel; 
        myFirstMap.insert (pair<string,string>(name,tel));
    }
    
    
    while (!cin.eof()) {
        cin >> name;
        auto it = myFirstMap.find(name);
        if (it != myFirstMap.end()) {
            cout << it->first << "=" << it->second << endl;
        } else {
            cout << "Not found" << endl;
        }
    }
           
    
    return 0;
}
