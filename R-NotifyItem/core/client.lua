ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj)
            ESX = obj
        end)
        Citizen.Wait(0)
    end
end)

local function notifyChange(changeType, label, name, amount)
    if not label or not name or not amount or amount == 0 then
        return
    end

    SendNUIMessage({
        action = 'addNotification',
        Type = changeType,
        Label = label,
        Name = name,
        Amount = math.abs(amount),
    })
end

local function handleInventoryUpdate(updates)
    if type(updates) ~= 'table' then
        return
    end

    for i = 1, #updates do
        local update = updates[i]
        local delta = tonumber(update.delta) or 0

        if delta ~= 0 then
            notifyChange(delta > 0 and 'Add' or 'Remove', update.label, update.name, delta)
        end
    end
end

local function handleAccountUpdate(account)
    if not account or not account.name then
        return
    end

    local accounts = ESX.GetPlayerData().accounts or {}
    local previousMoney = 0

    for i = 1, #accounts do
        local existing = accounts[i]
        if existing.name == account.name then
            previousMoney = existing.money or 0
            break
        end
    end

    local delta = (account.money or 0) - previousMoney
    if delta ~= 0 then
        notifyChange(delta > 0 and 'Add' or 'Remove', account.label, account.name, delta)
    end
end

RegisterNetEvent('esx:updateInventory')
AddEventHandler('esx:updateInventory', handleInventoryUpdate)

RegisterNetEvent('esx:setAccountMoney')
AddEventHandler('esx:setAccountMoney', handleAccountUpdate)

RegisterNetEvent('esx:updateAccounts')
AddEventHandler('esx:updateAccounts', function(updates)
    if type(updates) ~= 'table' then
        return
    end

    for i = 1, #updates do
        handleAccountUpdate(updates[i])
    end
end)

RegisterNetEvent('R-NotifyItem:client:weaponNotification')
AddEventHandler('R-NotifyItem:client:weaponNotification', function(changeType, weaponName, amount)
    notifyChange(changeType, loadoutInfo(weaponName), weaponName, amount or 1)
end)

function loadoutInfo(request)
    if not ESX or not ESX.GetWeaponList then
        return request
    end

    for i = 1, #ESX.GetWeaponList() do
        local weapon = ESX.GetWeaponList()[i]
        if weapon.name == request then
            return weapon.label
        end
    end

    return request
end
