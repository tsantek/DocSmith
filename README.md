##Galvanize Q3 project Resume Builder

### GitHub Workflow

// Creat new feature branch<br/>
git checkout -b new-feature<br/>
_Code new feature_<br/>
git add -A<br/>
git commit -m "New feature"<br/>
// Update master branch<br/>
git checkout master<br/>
git pull<br/>
// Update feature branch with master changes<br/>
git checkout new-feature<br/>
git merge master<br/>
_Fix conflicts_<br/>
git add -A<br/>
git commit<br/>
git push<br/>
// GitHub Pull request<br/>
Go to feature<br/>
Create and Send Pull request<br/>
Merge Pull request<br/>
Delete new-feature branch<br/>
