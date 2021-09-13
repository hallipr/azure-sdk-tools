FROM mcr.microsoft.com/powershell

RUN pwsh -c Install-Module Az -Force
RUN pwsh -c Install-Module Az.Accounts -Force
RUN mkdir -p /common

COPY ./ /common

CMD sleep 3600