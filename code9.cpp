#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

long int factorial(int k) {
    if (k <= 1) {
        return 1;
    } else {
        return k*factorial(k-1);
    }
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n);
    return 0;
}