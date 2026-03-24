ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

local function getPlayer(source)
    return ESX.GetPlayerFromId(source)
end

local function sendWeaponNotification(source, changeType, weaponName, amount)
    TriggerClientEvent('R-NotifyItem:client:weaponNotification', source, changeType, weaponName, amount or 1)
end

AddEventHandler('esx:onAddWeapon', function(source, weaponName)
    sendWeaponNotification(source, 'Add', weaponName, 1)
end)

AddEventHandler('esx:onRemoveWeapon', function(source, weaponName)
    sendWeaponNotification(source, 'Remove', weaponName, 1)
end)

RegisterServerEvent('inventory:addItem')
AddEventHandler('inventory:addItem', function(itemName, count)
    local _source = source
    local xPlayer = getPlayer(_source)

    if xPlayer then
        if not count or count < 1 then count = 1 end
        xPlayer.addInventoryItem(itemName, count)
    end
end)

RegisterServerEvent('inventory:removeItem')
AddEventHandler('inventory:removeItem', function(itemName, count)
    local _source = source
    local xPlayer = getPlayer(_source)

    if xPlayer then
        if not count or count < 1 then count = 1 end
        local currentCount = xPlayer.getInventoryItem(itemName).count or 0
        if currentCount >= count then
            xPlayer.removeInventoryItem(itemName, count)
        else
            TriggerClientEvent('esx:showNotification', _source, 'Not enough items to remove!')
        end
    end
end)

RegisterServerEvent('inventory:addWeapon')
AddEventHandler('inventory:addWeapon', function(weaponName, ammo)
    local _source = source
    local xPlayer = getPlayer(_source)

    if xPlayer then
        ammo = ammo or 250
        xPlayer.addWeapon(weaponName, ammo)
    end
end)

RegisterServerEvent('inventory:removeWeapon')
AddEventHandler('inventory:removeWeapon', function(weaponName)
    local _source = source
    local xPlayer = getPlayer(_source)

    if xPlayer then
        if xPlayer.hasWeapon(weaponName) then
            xPlayer.removeWeapon(weaponName)
        else
            TriggerClientEvent('esx:showNotification', _source, 'You don\'t have this weapon!')
        end
    end
end)

RegisterServerEvent('inventory:setAccountMoney')
AddEventHandler('inventory:setAccountMoney', function(accountName, amount, action)
    local _source = source
    local xPlayer = getPlayer(_source)

    if xPlayer then
        amount = tonumber(amount)
        if amount and amount > 0 then
            if action == 'add' then
                xPlayer.addAccountMoney(accountName, amount)
            elseif action == 'remove' then
                local currentMoney = xPlayer.getAccount(accountName).money
                if currentMoney >= amount then
                    xPlayer.removeAccountMoney(accountName, amount)
                else
                    TriggerClientEvent('esx:showNotification', _source, 'Insufficient funds in ' .. accountName .. '!')
                    return
                end
            end
        else
            TriggerClientEvent('esx:showNotification', _source, 'Invalid amount!')
        end
    end
end)

RegisterCommand('giveitem', function(source, args, rawCommand)
    local xPlayer = getPlayer(source)
    if xPlayer then
        if #args >= 2 then
            local itemName = args[1]
            local count = tonumber(args[2])
            if ESX.Items[itemName] then
                TriggerEvent('inventory:addItem', itemName, count)
            else
                TriggerClientEvent('esx:showNotification', source, 'Invalid item name!')
            end
        else
            TriggerClientEvent('esx:showNotification', source, 'Usage: /giveitem [item] [count]')
        end
    end
end, false)

RegisterCommand('giveweapon', function(source, args, rawCommand)
    local xPlayer = getPlayer(source)
    if xPlayer then
        if #args >= 1 then
            local weaponName = string.upper(args[1])
            local ammo = tonumber(args[2]) or 250
            TriggerEvent('inventory:addWeapon', weaponName, ammo)
        else
            TriggerClientEvent('esx:showNotification', source, 'Usage: /giveweapon [weapon] [ammo]')
        end
    end
end, false)

RegisterCommand('givemoney', function(source, args, rawCommand)
    local xPlayer = getPlayer(source)
    if xPlayer then
        if #args >= 2 then
            local accountName = args[1]
            local amount = tonumber(args[2])
            if amount and (accountName == 'money' or accountName == 'bank' or accountName == 'black_money') then
                TriggerEvent('inventory:setAccountMoney', accountName, amount, 'add')
            else
                TriggerClientEvent('esx:showNotification', source, 'Invalid account or amount!')
            end
        else
            TriggerClientEvent('esx:showNotification', source, 'Usage: /givemoney [account] [amount]')
        end
    end
end, false)

RegisterCommand('removeitem', function(source, args, rawCommand)
    local xPlayer = getPlayer(source)
    if xPlayer and xPlayer.getGroup() == 'admin' then
        if #args >= 2 then
            local itemName = args[1]
            local count = tonumber(args[2])
            if ESX.Items[itemName] then
                TriggerEvent('inventory:removeItem', itemName, count)
            else
                TriggerClientEvent('esx:showNotification', source, 'Invalid item name!')
            end
        else
            TriggerClientEvent('esx:showNotification', source, 'Usage: /removeitem [item] [count]')
        end
    end
end, true)
