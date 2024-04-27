echo ""
echo ""

read -p "Vuoi effettuare la build maven del progetto BE? (y/n): " buildMavenBE
if [[ $buildMavenBE == [Yy] ]]; then
    echo ""
    echo "-------- lancio della build del be"
    cd be-springboot/scripts
    sh maven-build.sh
    cd ../..
fi


read -p "Vuoi effettuare la build maven del progetto BE CONFIG? (y/n): " buildMavenBEConfig
if [[ $buildMavenBEConfig == [Yy] ]]; then
    echo ""
    echo "-------- lancio della build del be config"
    cd be-configuration/scripts
    sh maven-build.sh
    cd ../..
fi

read -p "Vuoi effettuare la build npm del progetto FE? (y/n): " buildNpmFE
if [[ $buildNpmFE == [Yy] ]]; then
    echo ""
    echo "-------- lancio della build del fe"
    cd fe-react/scripts
    sh npm-build.sh
    cd ../..
fi


echo ""
echo "-------- spengo l'esecuzione presente"
docker compose down

echo ""
echo "-------- rimuovo le immagini"
docker rmi react-to-springboot_in-dockercompose-fe-react
docker rmi react-to-springboot_in-dockercompose-be-springboot
docker rmi react-to-springboot_in-dockercompose-be-configuration

echo ""
echo "-------- lancio del deploy"
docker compose up -d

echo ""
echo ""