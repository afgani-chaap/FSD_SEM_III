#include<bits/stdc++.h>
using namespace std;

int main(){

    int n ;
    cin >> n;

    int st;
    cin>>st;

    unordered_map<string , pair<int, int>> m;

    int sum  =0 ;

    m[""] = {st, 0};

    for(int i =0 ;i< n-1 ;i++){
        string s ;
        int x;
        cin>>s>>x;
        
        string temp= s.substr(0 , s.size() - 1);
        if(m[temp].second == 1){
            m[temp].second = 2;
            sum+=m[temp].first;
        }
        else{
            m[temp].second = 1;
        }

        m[s] = {x , 0};

        
    }

    cout<<sum;
}